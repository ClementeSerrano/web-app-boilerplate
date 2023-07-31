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
import DocAndMagnifyingGlass from '../../../../common/assets/icons/DocAndMagnifyingGlass';
import LockOpenIcon from '../../../../common/assets/icons/LockOpenIcon';

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

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Big impact with small amounts
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Investing in nature requires deep pockets. With ClimeInvest, you can invest as much as your wallet allows. 
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <DocAndMagnifyingGlass
              height={40}
              color={theme.palette.primary.main}
            />
          </ProblemStatementIconContainer>
          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            No nature expertise required
          </Typography>

          <Typography as="h2" variant="paragraph1">
            At ClimeInvest, we vet each project with our predictive AI built by climate scientists to provide you with a risk assessment you understand.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <LockOpenIcon height={40} color={theme.palette.primary.main} />
          </ProblemStatementIconContainer>
          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Simple investment structures
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Traditional nature investing is highly complex. ClimeInvest has standard investment structures that provide fast financing to projects.
          </Typography>
        </ProblemStatementCard>
      </ProblemStatementCardsContainer>
    </SectionContainer>
  );
}
