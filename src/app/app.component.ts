import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { CategoriesActions, CategoriesState } from "./share/state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public info$: Observable<CategoriesState>;

  constructor(private store: Store) {
    this.info$ = this.store.select(CategoriesState.categories);
  }

  ngOnInit() {
    this.store.dispatch(new CategoriesActions.FetchCategories())
  }
}
