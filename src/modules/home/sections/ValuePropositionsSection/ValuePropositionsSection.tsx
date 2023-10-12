import { useTheme } from 'styled-components';

import SectionContainer from 'components/SectionContainer/SectionContainer';
import Typography from 'components/Typography/Typography';
import DollarSignIcon from 'lib/assets/icons/DollarSignIcon';
import CubeIcon from 'lib/assets/icons/CubeIcon';
import LeafIcon from 'lib/assets/icons/LeafIcon';

import {
  ValuePropositionCardsContainer,
  ValuePropositionIconContainer,
  ValuePropositionCard,
} from './ValuePropositionsSection.styles';

export default function ValuePropositionsSection() {
  const theme = useTheme();

  return (
    <SectionContainer withSeparator style={{ paddingTop: theme.spacing.md }}>
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
            <CubeIcon height={40} color={theme.palette.primary.main} />
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
            <LeafIcon height={40} color={theme.palette.primary.main} />
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
