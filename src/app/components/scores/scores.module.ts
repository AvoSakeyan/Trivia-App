import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ScoresComponent } from "../scores/scores.component";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: ScoresComponent,
  }
];

@NgModule({
  declarations: [
    ScoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class ScoresModule { }
