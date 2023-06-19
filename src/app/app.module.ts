import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DifficultyComponent,
    QuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
})
export class AppModule {}
