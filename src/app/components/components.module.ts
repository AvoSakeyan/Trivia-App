import { NgModule } from '@angular/core';
import { NgxsModule} from "@ngxs/store";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../share/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { DatePipe, DecimalPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import { CategoriesComponent } from './categories/categories.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule} from "@angular/material/input";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ScoresComponent } from "./scores/scores.component";
import { MatIconModule } from "@angular/material/icon";

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
  {
    path: 'scores',
    component: ScoresComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    QuestionsComponent,
    ResultComponent,
    ScoresComponent
  ],
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
    MatDialogModule,
    MatIconModule,
    DatePipe,
  ],
})
export class ComponentsModule { }
