import { Action, State, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as CategoriesActions from './categories.actions';
import { CategoriesService } from "../../services/categories.service";
import { SnackBarService } from "../../services/snack-bar.service";
import { Category } from "../../interfaces/category.interface";

export interface CategoriesStateModel {
  categories: Category[];
}

@State<CategoriesStateModel>({
  name: 'categories',
  defaults: {
    categories: [],
  },
})
@Injectable()
export class CategoriesState {
  @Selector()
  public static categories({ categories }: CategoriesStateModel): any {
    return categories;
  }

  constructor(
    private categoriesService: CategoriesService,
    private snackBarService: SnackBarService,
  ) {}

  @Action(CategoriesActions.FetchCategories)
  public fetch(ctx: StateContext<CategoriesStateModel>): Observable<any> {
    return this.categoriesService.fetchCategories().pipe(
      tap((categories: Category[]) => {
        ctx.patchState({ categories });
      }),
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.fail('Failed getting categories');
        return throwError(() => error);
      })
    );
  }
}
