import styled from 'styled-components';
import Button from '../../../../../components/Button/Button';

import {
  PassphraseCardContainer,
  PassphraseText,
} from '../../../../../components/PassphraseCard/PassphraseCard.styles';
import { UsePassphraseWordState } from '../../../hooks/usePassphraseQuiz.types';

export const PassphraseQuizWordsContainer = styled(PassphraseCardContainer)`
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const PassphraseQuizWord = styled(PassphraseText)<
  Pick<UsePassphraseWordState, 'isQuestion' | 'isAnswered' | 'active'>
>`
  color: ${({ isQuestion, theme }) => {
    if (!isQuestion) return theme.palette.text.level1;

    return theme.palette.primary.main;
  }};

  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxs}px;
  }
`;

export const PassphraseQuizOptionButton = styled(Button)`
  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxs}px;
  }
`;
