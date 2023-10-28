import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    HttpClientModule,
    MatSnackBarModule
  ],
})
export class SharedModule { }
