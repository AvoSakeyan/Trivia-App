import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: 'results',
    loadChildren: () => import('../app/components/result/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'scores',
    loadChildren: () => import('../app/components/scores/scores.module').then((m) => m.ScoresModule),
  },
  {
    path: 'questions',
    loadChildren: () => import('../app/components/questions/questions.module').then((m) => m.QuestionsModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
