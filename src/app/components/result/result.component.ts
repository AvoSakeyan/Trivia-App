import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  public correctAnswers = localStorage.getItem('correctAnswerCount')
  public totalQuestions = localStorage.getItem('totalQuestions')

  constructor(private router: Router) {
  }

  backToHome() {
    this.router.navigate(['']);
    localStorage.setItem('correctAnswerCount', '');
    localStorage.setItem('totalQuestions', '')
  }

  seeResults() {
    this.router.navigate(['scores'])
  }
}
