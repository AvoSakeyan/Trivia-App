import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseUrls} from "../enums/endpoints.enum";
import {Questions} from "../interfaces/questions.interface";
import {QuestionsResponse} from "../interfaces/responses.interface";

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
}
