import { NgModule } from '@angular/core';
import { NgxsModule} from "@ngxs/store";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../share/shared.module";
import { RouterModule, Routes } from "@angular/router";
import {DecimalPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import { CategoriesComponent } from './categories/categories.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'results',
    component: ResultComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, QuestionsComponent, ResultComponent],
  imports: [
    SharedModule,
    NgxsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    MatInputModule,
    NgClass,
    NgIf,
    DecimalPipe,
  ],
})
export class ComponentsModule { }
