import { useTheme } from 'styled-components';

import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import Typography from '../../../../components/Typography/Typography';

import {
  ProblemStatementCardsContainer,
  ProblemStatementTitle,
  ProblemStatementIconContainer,
  ProblemStatementCard,
  // ProblemStatementSubtitle,
} from './ProblemStatementSection.styles';
import DollarSignIcon from '../../../../lib/assets/icons/DollarSignIcon';
import DocAndMagnifyingGlass from '../../../../lib/assets/icons/DocAndMagnifyingGlass';
import LockOpenIcon from '../../../../lib/assets/icons/LockOpenIcon';

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
            Investors
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Get assurance on future price stability based on core risk elements.
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
            Corporates
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Mitigate reputation risk and invest in climate projects with confidence.
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
            Project developers
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Get faster access to financing for your nature-based solution.
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
