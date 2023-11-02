import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { CategoriesActions, CategoriesState } from "../../share/state";
import { Category } from "../../share/interfaces/category.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit{
  public categories$: Observable<Category[]>;

  constructor(private store: Store) {
      this.categories$ = this.store.select(CategoriesState.categories);
  }

  ngOnInit() {
    this.store.dispatch(new CategoriesActions.FetchCategories())
  }

}
