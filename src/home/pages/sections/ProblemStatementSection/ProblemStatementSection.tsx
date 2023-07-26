import { useTheme } from 'styled-components';

import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';
import ValueIcon from '../../../../common/assets/icons/ValueIcon';

import {
  ProblemStatementCardsContainer,
  ProblemStatementTitle,
  ProblemStatementIconContainer,
  ProblemStatementCard,
} from './ProblemStatementSection.styles';

export default function ProblemStatementSection() {
  const theme = useTheme();

  return (
    <SectionContainer withSeparator style={{ paddingTop: theme.spacing.md }}>
      <ProblemStatementTitle>
        Nature is in dire need of your support
      </ProblemStatementTitle>

      <ProblemStatementCardsContainer>
        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <ValueIcon height={40} />
          </ProblemStatementIconContainer>

          <Typography as="h2" variant="title6">
            Investing in nature requires deep pockets and is highly complex.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <ValueIcon height={44} />
          </ProblemStatementIconContainer>
          <Typography as="h2" variant="title6">
            The risk profile of a project is notoriously difficult to price and
            unstandardised.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <ValueIcon height={32} />
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
