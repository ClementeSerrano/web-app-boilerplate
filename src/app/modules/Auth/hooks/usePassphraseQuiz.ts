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

  const [questionsPool, setQuestionsPool] = useState(questions);

  const activeQuestion = useMemo(() => questionsPool[0], [questionsPool]);

  const createOptions = useCallback(
    () =>
      shuffleArray([
        activeQuestion,
        ...pickRandomlyFromArray(
          words.filter(word => word !== activeQuestion),
          2,
        ),
      ]),
    [words, activeQuestion],
  );

  const [currentOptions, setCurrentOptions] = useState(createOptions());

  const checkAnswer = useCallback(
    (answer: string) => {
      const isAnswerCorrect = answer === activeQuestion;

      if (isAnswerCorrect) {
        // remove question from queue
        setQuestionsPool(pool =>
          pool.filter(question => question !== activeQuestion),
        );

        // if questions pool is not empty, quiz continues
        setCurrentOptions(createOptions());

        return true;
      }

      return false;
    },
    [createOptions, activeQuestion],
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
            active: isQuestion ? activeQuestion === word : null,
          },
        ];
      }, [] as UsePassphraseQuizState),
    [words, questions, questionsPool, activeQuestion],
  );

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
