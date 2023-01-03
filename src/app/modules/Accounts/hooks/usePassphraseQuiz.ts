import { useMemo, useState } from 'react';

import { pickRandomlyFromArray } from '../../../../helpers/array.helpers';

import { createPassphraseQuizOptions } from './usePassphraseQuiz.helpers';
import {
  UsePassphraseQuiz,
  UsePassphraseQuizState,
} from './usePassphraseQuiz.types';

/**
 * Provides all business logic necessary for executing a
 * passphrase verification test.
 * @param passphrase - Passphrase to based on the quiz.
 * @returns - The state of the quiz (words, questions and answers),
 * an answer checker callback, the current options and if the quiz is
 * passed or not.
 */
export default function usePassphraseQuiz(
  passphrase: string,
): UsePassphraseQuiz {
  const words = useMemo(() => passphrase.split(' '), [passphrase]);

  const questions = useMemo(() => pickRandomlyFromArray(words, 2), [words]);

  const [questionsPool, setQuestionsPool] = useState(questions);

  const [currentOptions, setCurrentOptions] = useState(
    createPassphraseQuizOptions(questionsPool[0]),
  );

  const activeQuestion = questionsPool[0];

  const checkAnswer = (answer: string) => {
    const isAnswerCorrect = answer === activeQuestion;

    if (isAnswerCorrect) {
      // remove question from pool
      setQuestionsPool(pool =>
        pool.filter(question => question !== activeQuestion),
      );

      // if questions pool is not empty, quiz continues
      const nextQuestion = questionsPool[questionsPool.length - 1];

      if (nextQuestion) {
        setCurrentOptions(createPassphraseQuizOptions(nextQuestion));
      }

      return true;
    }

    return false;
  };

  const passed = questionsPool.length === 0;

  const state = words.reduce((acc, word) => {
    const isQuestion = questions.includes(word);

    return [
      ...acc,
      {
        word,
        isQuestion,
        isAnswered: isQuestion ? !questionsPool.includes(word) : null,
        active: isQuestion ? activeQuestion === word : null,
      },
    ];
  }, [] as UsePassphraseQuizState);

  return {
    state,
    words,
    questionsPool,
    activeQuestion,
    currentOptions,
    questions,
    checkAnswer,
    passed,
  };
}
