import { darkTheme } from '../theme/dark-theme';
import { lightTheme } from '../theme/light-theme';
import { ThemeModule } from '../theme/theme.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { QuestionComponent } from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RankingComponent } from './components/ranking/ranking.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SucessComponent } from './components/sucess/sucess.component';
import { FailComponent } from './components/fail/fail.component';
import { AuthGuardService } from './auth-guard.service';
import {
  GoogleLoginProvider,
  GoogleSigninButtonDirective,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DifficultyComponent,
    QuestionComponent,
    RankingComponent,
    ProfileComponent,
    HomeComponent,
    SucessComponent,
    FailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '843738827516-funbbbjoh8n77emkjamoq2sha78v2vmo.apps.googleusercontent.com',
              {
                oneTapEnabled: false,
              }
            ),
          },
        ],
        onError: (err) => {
          console.log(err);
        },
      } as SocialAuthServiceConfig,
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
