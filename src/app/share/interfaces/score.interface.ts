import { CorrectAnswer } from "./correct-answer.interface";

export interface Score {
  correctAnswer: CorrectAnswer[],
  currentAnswerCount: string,
  date: string,
}
