import {
  PassphraseCardContainer,
  PassphraseText,
} from '../../../../../components/PassphraseCard/PassphraseCard.styles';
import { UsePassphraseQuiz } from '../../../hooks/usePassphraseQuiz.types';

export default function PassphraseQuiz({ quiz }: { quiz: UsePassphraseQuiz }) {
  return (
    <PassphraseCardContainer as="aside">
      {quiz.state.map(({ word, isQuestion, isAnswered }, index) => (
        <PassphraseText key={index}>
          {isQuestion ? '_______' : word}
        </PassphraseText>
      ))}
    </PassphraseCardContainer>
  );
}
