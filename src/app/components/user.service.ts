import { Injectable } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: SocialUser | null = null;

  getUser(): SocialUser | null {
    return this.user;
  }

  setUser(user: SocialUser | null): void {
    this.user = user;
  }
}
