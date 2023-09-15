import { useTheme } from 'styled-components';

import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import Typography from '../../../../components/Typography/Typography';

import {
  ValuePropositionCardsContainer,
  ValuePropositionTitle,
  ValuePropositionIconContainer,
  ValuePropositionCard,
} from './ValuePropositionsSection.styles';
import DollarSignIcon from '../../../../lib/assets/icons/DollarSignIcon';
import DocAndMagnifyingGlass from '../../../../lib/assets/icons/DocAndMagnifyingGlass';
import LockOpenIcon from '../../../../lib/assets/icons/LockOpenIcon';

export default function ValuePropositionsSection() {
  const theme = useTheme();

  return (
    <SectionContainer style={{ paddingTop: theme.spacing.md }}>
      <ValuePropositionTitle>
        Opening access to climate investments
      </ValuePropositionTitle>

      <ValuePropositionCardsContainer>
        <ValuePropositionCard>
          <ValuePropositionIconContainer>
            <DollarSignIcon height={40} color={theme.palette.primary.main} />
          </ValuePropositionIconContainer>

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
        </ValuePropositionCard>

        <ValuePropositionCard>
          <ValuePropositionIconContainer>
            <DocAndMagnifyingGlass
              height={40}
              color={theme.palette.primary.main}
            />
          </ValuePropositionIconContainer>
          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Corporates
          </Typography>

          <Typography as="h2" variant="paragraph1">
            Mitigate reputation risk and invest in climate projects with
            confidence.
          </Typography>
        </ValuePropositionCard>

        <ValuePropositionCard>
          <ValuePropositionIconContainer>
            <LockOpenIcon height={40} color={theme.palette.primary.main} />
          </ValuePropositionIconContainer>
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
        </ValuePropositionCard>
      </ValuePropositionCardsContainer>
    </SectionContainer>
  );
}
