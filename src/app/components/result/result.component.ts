import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  public correctAnswer = localStorage.getItem('correctAnswerCount')

  constructor(private router: Router) {
  }

  backToHome() {
    this.router.navigate(['']);
    localStorage.setItem('correctAnswerCount', '');
  }
}
