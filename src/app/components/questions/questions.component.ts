import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";

import { QuestionsState } from "../../share/state";
import { Questions } from "../../share/interfaces/questions.interface";
import { Difficulty} from "../../share/enums/difficulty.enum";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  public questions: Questions[] = [];
  public difficulty= Difficulty;
  public currentQuestionIndex: number = 0;
  public userSelectedAnswer: string | null = null;
  public quizStarted: boolean = false;
  public quizFinished: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.store.select(QuestionsState.questions).subscribe(data => {
      if(data.length) {
        this.startQuiz()
      }

     this.questions = data.map(item => {
        const combinedAnswers = [item.correct_answer, ...item.incorrect_answers];
        const answers = this.shuffleArray(combinedAnswers)
        return {
          ...item,
          answers
        }
      });
    });
  }

  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
    this.quizStarted = true;
    this.quizFinished = false;
  }

  selectAnswer(answer: string) {
    this.userSelectedAnswer = answer;
    this.checkAnswer()
  }

  checkAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.userSelectedAnswer === currentQuestion.correct_answer) {
      const currentCorrectAnswerCount = parseInt(localStorage.getItem('correctAnswerCount') || '0', 10);
      console.log('currentCorrectAnswerCount', currentCorrectAnswerCount);
      const newCorrectAnswerCount = currentCorrectAnswerCount + 1;
      console.log('newCorrectAnswerCount', newCorrectAnswerCount);
      localStorage.setItem('correctAnswerCount', newCorrectAnswerCount.toString());
      console.log('Correct');
    } else {
      // Handle incorrect answer
      console.log('wrong');
    }
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.userSelectedAnswer = null;
    } else {
      // Quiz finished
      this.quizFinished = true;
      this.router.navigate(['results']);
    }
  }
}
