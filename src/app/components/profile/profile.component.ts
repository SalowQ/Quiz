import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: SocialUser | null = null;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {}
}
