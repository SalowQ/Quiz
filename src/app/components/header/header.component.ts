import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.event.emit(this.isOpen);
    this.isOpen = false;
  }
}
