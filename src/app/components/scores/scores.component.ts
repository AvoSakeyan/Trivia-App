import { Component, OnInit } from '@angular/core';
import { Score } from "../../share/interfaces/score.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
  private scores = localStorage.getItem('score');
  public scoreList: Score[] = []
  public titles = ['Id', 'Date passed', 'Total Correct Answers'];

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.scores !== null) {
      this.scoreList = JSON.parse(this.scores);
    }
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
