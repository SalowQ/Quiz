import { SettingsComponent } from './components/settings/settings.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {
    path: 'difficulty',
    component: DifficultyComponent,
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
