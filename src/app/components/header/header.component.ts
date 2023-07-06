import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: SocialUser | null = null;

  @Output() event = new EventEmitter<boolean>();
  @Output() profile = new EventEmitter<boolean>();

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
    this.event.emit(true);
  }

  profileTry() {
    this.profile.emit(true);
  }
}
