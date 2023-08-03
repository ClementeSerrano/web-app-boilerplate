import { useTheme } from 'styled-components';

import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import {
  ProblemStatementCardsContainer,
  ProblemStatementTitle,
  ProblemStatementIconContainer,
  ProblemStatementCard,
  // ProblemStatementSubtitle,
} from './ProblemStatementSection.styles';
import DollarSignIcon from '../../../../common/assets/icons/DollarSignIcon';
import DocAndMagnifyingGlass from '../../../../common/assets/icons/DocAndMagnifyingGlass';
import LockOpenIcon from '../../../../common/assets/icons/LockOpenIcon';

export default function ProblemStatementSection() {
  const theme = useTheme();

  return (
    <SectionContainer withSeparator style={{ paddingTop: theme.spacing.md }}>
      <ProblemStatementTitle>
        Opening access to climate investments
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
            Investing in nature projects requires deep pockets. With
            Climeinvest, you can invest as much as your wallet allows.
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
            No deep expertise required
          </Typography>

          <Typography as="h2" variant="paragraph1">
            At Climeinvest, we vet each project with our predictive AI built by
            climate scientists to provide you with a risk assessment you
            understand.
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
            Faster financing for project developers
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Investing in nature projects can be highly complex. Climeinvest has
            standard investment structures that provide fast financing to
            projects.
          </Typography>
        </ProblemStatementCard>
      </ProblemStatementCardsContainer>

      {/* <ProblemStatementSubtitle variant="title5" color="level3">
        From reforestation to ocean clean ups to green infrastructure. With
        Climeinvest, you invest to build nature-based projects that remove
        carbon from the atmosphere.
      </ProblemStatementSubtitle> */}
    </SectionContainer>
  );
}
