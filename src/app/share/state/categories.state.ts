import { Action, State, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as CategoriesActions from './categories.actions';
import { CategoriesService } from "../services/categories.service";
import { SnackBarService } from "../services/snack-bar.service";

export interface CategoriesStateModel {
  categories: any;
}

@State<CategoriesStateModel>({
  name: 'categories',
  defaults: {
    categories: null,
  },
})
@Injectable()
export class CategoriesState {
  @Selector()
  public static categories({ categories }: CategoriesStateModel): any {
    return categories;
  }

  constructor(
    private deviceInfoService: CategoriesService,
    private snackBarService: SnackBarService,
  ) {}

  @Action(CategoriesActions.FetchCategories)
  public fetch(ctx: StateContext<CategoriesStateModel>): Observable<any> {
    return this.deviceInfoService.fetch().pipe(
      tap((categories: any) => {
        ctx.patchState({ categories });
        this.snackBarService.success('Succeed getting categories');
      }),
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.fail('Failed getting categories');
        return throwError(() => error);
      })
    );
  }
}
