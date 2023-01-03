import { WithStyle } from '../../../../../components/components.types';
import Grid from '../../../../../components/Grid/Grid';
import { UsePassphraseQuiz } from '../../../hooks/usePassphraseQuiz.types';

import {
  PassphraseQuizWordsContainer,
  PassphraseQuizWord,
  PassphraseQuizOptionButton,
} from './PassphraseQuiz.styles';

export default function PassphraseQuiz({
  quiz,
  style,
  className,
}: WithStyle & { quiz: UsePassphraseQuiz }) {
  return (
    <Grid style={style} className={className}>
      <PassphraseQuizWordsContainer as="aside">
        {quiz.state.map(({ word, isQuestion, isAnswered, active }, index) => (
          <PassphraseQuizWord
            key={index}
            isQuestion={isQuestion}
            isAnswered={isAnswered}
            active={active}
          >
            {isQuestion && !isAnswered ? '_______' : word}
          </PassphraseQuizWord>
        ))}
      </PassphraseQuizWordsContainer>

      <Grid direction="row">
        {!quiz.passed &&
          quiz.currentOptions.map((option, index) => (
            <PassphraseQuizOptionButton
              key={index}
              variant="primary"
              format="outline"
              type="button"
              onClick={() => quiz.checkAnswer(option)}
            >
              {option}
            </PassphraseQuizOptionButton>
          ))}
      </Grid>
    </Grid>
  );
}
