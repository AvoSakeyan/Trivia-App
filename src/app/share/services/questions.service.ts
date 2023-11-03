import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { BaseUrls } from "../enums/endpoints.enum";
import { Questions } from "../interfaces/questions.interface";
import { QuestionsResponse } from "../interfaces/responses.interface";
import { Score } from "../interfaces/score.interface";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public fetchQuestions(categoryId: number): Observable<Questions[]> {
    return this.http.get<QuestionsResponse>(`${BaseUrls.questions}&category=${categoryId}`).pipe(
      map(data => data.results)
    );
  }

  public setScore(score: Score) {
    const scoreList = JSON.parse(localStorage.getItem('score') || '[]') as Score[];
    scoreList.push(score);
    localStorage.setItem('score', JSON.stringify(scoreList))
  }
}
