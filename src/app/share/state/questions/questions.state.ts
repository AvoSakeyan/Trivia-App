import { Action, State, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as CategoriesActions from './questions.actions';
import { SnackBarService } from "../../services/snack-bar.service";
import { QuestionsService } from "../../services/questions.service";
import { Questions } from "../../interfaces/questions.interface";

export interface QuestionsStateModel {
  questions: Questions[];
}

@State<QuestionsStateModel>({
  name: 'questions',
  defaults: {
    questions: [],
  },
})

@Injectable()
export class QuestionsState {
  @Selector()
  public static questions({ questions }: QuestionsStateModel): Questions[] {
    return questions;
  }

  constructor(
    private questionsService: QuestionsService,
    private snackBarService: SnackBarService,
  ) {}

  @Action(CategoriesActions.FetchQuestions)
  public fetch(ctx: StateContext<QuestionsStateModel>,  { id }: CategoriesActions.FetchQuestions): Observable<any> {
    return this.questionsService.fetchQuestions(id).pipe(
      tap((questions: Questions[]) => {
        ctx.patchState({ questions });
      }),
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.fail('Failed getting questions');
        return throwError(() => error);
      })
    );
  }

  @Action(CategoriesActions.SetScore)
  public setScore(ctx: StateContext<QuestionsStateModel>,  { score }: CategoriesActions.SetScore) {
    return this.questionsService.setScore(score);
  }
}
