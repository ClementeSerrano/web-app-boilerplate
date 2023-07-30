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

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Making Climate Investment Accessible.
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Forget about needing deep pockets or navigating complexity. With
            Climevest, we make climate investment possible for every budget and
            understanding level.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <ClockArrowIcon height={40} color={theme.palette.primary.main} />
          </ProblemStatementIconContainer>
          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Risk Assessment Made Simple
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Estimating risk doesn't have to be a marathon. Our robust platform
            provides easy-to-understand risk assessments for every project,
            saving you time and providing peace of mind.
          </Typography>
        </ProblemStatementCard>

        <ProblemStatementCard>
          <ProblemStatementIconContainer>
            <CircledClosedEyeIcon
              height={40}
              color={theme.palette.primary.main}
            />
          </ProblemStatementIconContainer>
          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Unrestricted Access to Quality Projects
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Don't be limited by your investor status. Climevest levels the
            playing field, providing unrestricted access to high-quality climate
            projects for both average and sophisticated investors.
          </Typography>
        </ProblemStatementCard>
      </ProblemStatementCardsContainer>
    </SectionContainer>
  );
}
