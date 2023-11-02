import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule} from "@ngxs/store";

import { AppComponent } from './app.component';
import { SharedModule} from "./share/shared.module";
import * as State from './share/state/index';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      State.CategoriesState,
      State.QuestionsState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
