export type UsePassphraseQuiz = {
  state: UsePassphraseQuizState;
  words: string[];
  questionsPool: string[];
  currentOptions: string[];
  questions: string[];
  checkAnswer: (index: number, answer: string) => boolean;
  passed: boolean;
};

export type UsePassphraseQuizState = {
  word: string;
  isQuestion: boolean;
  isAnswered: null | boolean;
}[];
