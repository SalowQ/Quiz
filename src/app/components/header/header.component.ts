import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  AfterContentInit,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  user: SocialUser | null = null;

  @Output() event = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.event.emit(this.isOpen);
    this.isOpen = false;
  }
}
