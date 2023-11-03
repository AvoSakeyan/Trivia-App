import { Score } from "../../interfaces/score.interface";

export class FetchQuestions{
  public static readonly type = '[Questions] fetch questions';
  constructor(public id: number) {}
}

export class SetScore {
  public static readonly type = '[Questions] set score';
  constructor(public score: Score) {}
}
