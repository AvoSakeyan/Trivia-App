import { Category } from "./category.interface";
import {Questions} from "./questions.interface";

export interface CategoryResponse {
  trivia_categories: Category[];
}

export interface QuestionsResponse {
  response_code: number;
  results: Questions[];
}
