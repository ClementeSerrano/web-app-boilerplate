import { useTheme } from 'styled-components';

import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import {
  ProblemStatementCardsContainer,
  ProblemStatementTitle,
  ProblemStatementIconContainer,
  ProblemStatementCard,
} from './ProblemStatementSection.styles';
import DollarSignIcon from '../../../../common/assets/icons/DollarSignIcon';
import ClockArrowIcon from '../../../../common/assets/icons/ClockArrowIcon';
import CircledClosedEyeIcon from '../../../../common/assets/icons/CircledClosedEyeIcon';

export default function ProblemStatementSection() {
  const theme = useTheme();

  return (
    <SectionContainer withSeparator style={{ paddingTop: theme.spacing.md }}>
      <ProblemStatementTitle>
        Democratizing climate investment
      </ProblemStatementTitle>

      <ProblemStatementCardsContainer>
        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <DollarSignIcon height={40} color={theme.palette.primary.main} />
          </ProblemStatementIconContainer>

          <Typography as="h2" variant="title6">
            Investing in nature requires deep pockets and is highly complex.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <ClockArrowIcon height={40} color={theme.palette.primary.main} />
          </ProblemStatementIconContainer>
          <Typography as="h2" variant="title6">
            It’s difficult to assess the risk of a climate project and it takes
            a long time to estimate it.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <CircledClosedEyeIcon
              height={40}
              color={theme.palette.primary.main}
            />
          </ProblemStatementIconContainer>

          <Typography as="h2" variant="title6">
            Access to high quality projects is limited and out of reach for the
            average & sophisticated investor.
          </Typography>
        </ProblemStatementCard>
      </ProblemStatementCardsContainer>
    </SectionContainer>
  );
}
