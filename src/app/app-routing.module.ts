import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifficultyComponent } from './components/difficulty/difficulty.component';

const routes: Routes = [
  {
    path: 'difficulty',
    component: DifficultyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
