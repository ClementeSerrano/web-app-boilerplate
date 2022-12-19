export type UsePassphraseQuiz = {
  state: UsePassphraseQuizState;
  words: string[];
  questionsPool: string[];
  activeQuestion: string;
  currentOptions: string[];
  questions: string[];
  checkAnswer: (answer: string) => boolean;
  passed: boolean;
};

export type UsePassphraseQuizState = UsePassphraseWordState[];

export type UsePassphraseWordState = {
  word: string;
  isQuestion: boolean;
  isAnswered: null | boolean;
  active: null | boolean;
};
