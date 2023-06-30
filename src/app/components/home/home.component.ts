import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: SocialUser | null = null;

  constructor(private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logOut() {
    this.socialAuthService.signOut();
  }
}
