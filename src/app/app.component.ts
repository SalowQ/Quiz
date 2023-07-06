import { UserService } from './components/user.service';
import { SocialUser } from '@abacritt/angularx-social-login';
import { ThemeService } from '../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private router: Router,
    private socialAuthService: SocialAuthService,
    private userService: UserService,
    private snackBar: MatSnackBar
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

  logOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['/']);
  }

  openSnackBar() {
    this.snackBar.open('You have to log in to see this!', '👍', {
      panelClass: 'trans',
      duration: 3000,
    });
  }
}
