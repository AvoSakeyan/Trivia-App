import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseUrls} from "../enums/endpoints.enum";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public fetch(): Observable<any> {
    return this.http.get(BaseUrls.categories);
  }
}
