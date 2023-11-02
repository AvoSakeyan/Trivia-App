import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AsyncPipe, JsonPipe } from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
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
    JsonPipe
  ],
})
export class SharedModule { }
