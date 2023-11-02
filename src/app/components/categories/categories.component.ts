import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup  } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

import { Category } from "../../share/interfaces/category.interface";
import { QuestionsActions } from "../../share/state";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit{
  @Input() categories?: Category[] | null;
  public categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router) {
    this.categoryForm = this.fb.group({
      patientCategory: [null]
    });
  }

  ngOnInit() {}

  getQuestions() {
    const id = this.categoryForm.get('patientCategory')?.value?.id
    this.store.dispatch(new QuestionsActions.FetchQuestions(id))

    this.router.navigate(['questions']);
  }
}
