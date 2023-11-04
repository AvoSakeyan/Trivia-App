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
import { MatDialogModule } from "@angular/material/dialog";
import { CorrectAnswersModalComponent } from './correct-answers-modal/correct-answers-modal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    CorrectAnswersModalComponent,
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
    DatePipe,
  ],
})
export class ComponentsModule { }
