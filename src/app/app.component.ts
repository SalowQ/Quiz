import { UserService } from './components/user.service';
import { SocialUser } from '@abacritt/angularx-social-login';
import { ThemeService } from '../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  opened = false;
  title = 'quiz';
  user: SocialUser | null = null;
  loggedIn = false;

  constructor(
    private themeService: ThemeService,
    private socialAuthService: SocialAuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.userService.setUser(user);
      console.log(user);
    });
  }

  toggleTheme() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
