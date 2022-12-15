import { useCallback, useMemo, useState } from 'react';

import {
  pickRandomlyFromArray,
  shuffleArray,
} from '../../../../helpers/array.helpers';
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

  const createOptions = useCallback(
    (answer: string) =>
      shuffleArray([
        answer,
        ...pickRandomlyFromArray(
          words.filter(word => word !== answer),
          2,
        ),
      ]),
    [words],
  );

  const [currentOptions, setCurrentOptions] = useState(
    createOptions(questions[0]),
  );

  const [questionsPool, setQuestionsPool] = useState(questions);

  const checkAnswer = useCallback(
    (index: number, answer: string) => {
      const correctAnswer = words[index];

      const isAnswerCorrect = answer === correctAnswer;

      if (isAnswerCorrect) {
        // remove question from queue
        setQuestionsPool(pool =>
          pool.filter(question => question !== correctAnswer),
        );

        // if questions pool is not empty, quiz continues
        setCurrentOptions(createOptions(questionsPool[0]));

        return true;
      }

      return false;
    },
    [words, questionsPool, createOptions],
  );

  const passed = useMemo(() => questionsPool.length === 0, [questionsPool]);

  const state = useMemo(
    () =>
      words.reduce((acc, word) => {
        const isQuestion = questions.includes(word);

        return [
          ...acc,
          {
            word,
            isQuestion,
            isAnswered: isQuestion ? !questionsPool.includes(word) : null,
          },
        ];
      }, [] as UsePassphraseQuizState),
    [words, questions, questionsPool],
  );

  return {
    state,
    words,
    questionsPool,
    currentOptions,
    questions,
    checkAnswer,
    passed,
  };
}
