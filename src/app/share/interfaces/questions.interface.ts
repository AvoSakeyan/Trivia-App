export interface Questions {
  category: string;
  correct_answer:string;
  difficulty: string;
  incorrect_answers: string[];
  answers?: string[];
  question: string;
  type: string;
}
