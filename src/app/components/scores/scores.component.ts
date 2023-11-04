import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

import { Score } from "../../share/interfaces/score.interface";
import { CorrectAnswer } from "../../share/interfaces/correct-answer.interface";
import {CorrectAnswersModalComponent} from "../correct-answers-modal/correct-answers-modal.component";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
  private scores = localStorage.getItem('score');
  public scoreList: Score[] = []
  public titles = ['Id', 'Date passed', 'Total Correct Answers'];

  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    if (this.scores !== null) {
      this.scoreList = JSON.parse(this.scores);
    }
  }

  backToHome() {
    this.router.navigate(['']);
  }

  seeAnswers(correctAnswers: CorrectAnswer[]) {
    this.dialog.open(CorrectAnswersModalComponent, {
      width: '700px', // Adjust the width as needed
      data: correctAnswers,
    });
  }
}
