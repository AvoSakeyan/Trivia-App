import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";

import { map, takeUntil } from "rxjs";
import { QuestionsActions, QuestionsState } from "../../share/state";
import { Questions } from "../../share/interfaces/questions.interface";
import { Difficulty } from "../../share/enums/difficulty.enum";
import { BaseComponent } from "../../share/components/base-component/base.component";
import { CorrectAnswer } from "../../share/interfaces/correct-answer.interface";
import { Score } from "../../share/interfaces/score.interface";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent extends BaseComponent implements OnInit{
  public questions: Questions[] = [];
  public difficulty= Difficulty;
  public currentQuestionIndex: number = 0;
  public userSelectedAnswer: string | null = null;
  public quizStarted: boolean = false;
  public quizFinished: boolean = false;
  public correct_answers: CorrectAnswer[] = [];
  public questionTransitionClass = 'question-transition';

  constructor(
    private store: Store,
    private router: Router,
  ) {
    super()
  }

  ngOnInit() {
    this.getQuestions()
    this.questionTransitionClass += ' question-transition-enter';
  }

  toggleTransitionClass() {
    this.questionTransitionClass = this.questionTransitionClass.includes('leave') ?
      'question-transition-enter' : 'question-transition-leave';
  }

  getQuestions() {
    this.store.select(QuestionsState.questions)
      .pipe(
        takeUntil(this.unsubscribe),
        map(data => {
          if (data.length) {
            this.startQuiz()
          }
          localStorage.setItem('totalQuestions', data.length.toString())
          this.questions = data.map(item => {
            this.correct_answers.push({
              question: item.question,
              answer: item.correct_answer
            })
            const combinedAnswers = [item.correct_answer, ...item.incorrect_answers];
            const answers = this.shuffleArray(combinedAnswers)
            return {
              ...item,
              answers
            }
          });
        })
      ).subscribe()
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
    this.toggleTransitionClass(); // Trigger the transition
    this.checkAnswer()
  }

  checkAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.userSelectedAnswer === currentQuestion.correct_answer) {
      const currentCorrectAnswerCount = parseInt(localStorage.getItem('correctAnswerCount') || '0', 10);
      const newCorrectAnswerCount = currentCorrectAnswerCount + 1;
      localStorage.setItem('correctAnswerCount', newCorrectAnswerCount.toString());
      console.log('Correct');
    } else {
      console.log('wrong');
    }
    this.nextQuestion()
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.userSelectedAnswer = null;
    } else {
      // Quiz finished
      const score: Score = {
        correctAnswer: this.correct_answers,
        currentAnswerCount: localStorage.getItem('correctAnswerCount') || '',
        date: new Date().toLocaleString(),
      }
      this.store.dispatch(new QuestionsActions.SetScore(score))
      this.quizFinished = true;
      this.router.navigate(['results']);
    }
  }
}
