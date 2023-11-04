import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { QuestionsComponent } from "../questions/questions.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  }
];


@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class QuestionsModule { }
