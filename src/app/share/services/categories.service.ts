import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { BaseUrls } from "../enums/endpoints.enum";
import { Category } from "../interfaces/category.interface";
import { CategoryResponse } from "../interfaces/responses.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public fetchCategories(): Observable<Category[]> {
    return this.http.get<CategoryResponse>(BaseUrls.categories).pipe(
      map(data => data.trivia_categories)
    );
  }
}
