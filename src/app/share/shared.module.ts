import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

import { BaseComponent } from "./components/base-component/base.component";

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    AsyncPipe,
    JsonPipe,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    AsyncPipe,
    JsonPipe,
    BaseComponent
  ],
})
export class SharedModule { }
