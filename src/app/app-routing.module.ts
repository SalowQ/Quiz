import { FailComponent } from './components/fail/fail.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'difficulty',
    component: DifficultyComponent,
  },
  {
    path: 'question/:dif',
    component: QuestionComponent,
    title: 'Quiz | Question',
  },
  {
    path: 'ranking',
    component: RankingComponent,
    title: 'Quiz | Ranking',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Quiz | Profile',
  },
  {
    path: 'sucess',
    component: SucessComponent,
    title: 'Quiz | Question Sucess',
  },
  {
    path: 'fail',
    component: FailComponent,
    title: 'Quiz | Question Fail',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
