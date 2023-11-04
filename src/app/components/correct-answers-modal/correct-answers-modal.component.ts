import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CorrectAnswer } from "../../share/interfaces/correct-answer.interface";

@Component({
  selector: 'app-correct-answers-modal',
  templateUrl: './correct-answers-modal.component.html',
  styleUrls: ['./correct-answers-modal.component.scss']
})
export class CorrectAnswersModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CorrectAnswer[]) {}
}
