import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

import { ScoresComponent } from "./scores.component";
import {MatDialogModule} from "@angular/material/dialog";

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
    MatDialogModule
  ]
})
export class ScoresModule { }
