import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import Typography from '../../../../common/components/Typography/Typography';
import Card from '../../../../common/components/Card/Card';
import ValueIcon from '../../../../common/assets/icons/ValueIcon';
import TeamworkIcon from '../../../../common/assets/icons/TeamworkIcon';
import BeautifulIcon from '../../../../common/assets/icons/BeautifulIcon';

import {
  CompetitiveAdvantagesCardsContainer,
  CompetitiveAdvantagesIconContainer,
} from './CompetitiveAdvantages.styles';
import { useTheme } from 'styled-components';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';

export default function CompetitiveAdvantagesSection() {
  const { isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer withSeparator>
      <Typography
        as="h1"
        variant="title3"
        style={{ textAlign: 'center', marginBottom: theme.spacing.lg }}
      >
        Get high yields <br />
        by investing in strong <br />
        climate action stocks.
      </Typography>

      <CompetitiveAdvantagesCardsContainer>
        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <ValueIcon height={40} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Curated climate projects.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Grafito is made up only by local creators. With us you will find
            projects with unique proposals and with highly creative & exclusive
            products.
          </Typography>
        </Card>

        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <TeamworkIcon height={44} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Community oriented.
          </Typography>

          {/* Add: we help each other and work together (more teamwork oriented). */}
          <Typography as="p" variant="paragraph1" color="level3">
            We are a community who believe in the local value, supports it and
            contribute to make it growth and competitive.
          </Typography>
        </Card>

        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <BeautifulIcon height={32} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Beautiful and easy to use.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Intuitive, robust and meticulous designed features to unlock your
            project's potential and give your followers a fresh shopping
            experience.
          </Typography>
        </Card>

        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <ValueIcon height={40} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Curated climate projects.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Grafito is made up only by local creators. With us you will find
            projects with unique proposals and with highly creative & exclusive
            products.
          </Typography>
        </Card>

        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <TeamworkIcon height={44} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Community oriented.
          </Typography>

          {/* Add: we help each other and work together (more teamwork oriented). */}
          <Typography as="p" variant="paragraph1" color="level3">
            We are a community who believe in the local value, supports it and
            contribute to make it growth and competitive.
          </Typography>
        </Card>

        <Card
          style={{
            padding: isPhone ? '32px 24px' : '32px 52px',
            alignItems: isPhone ? 'center' : 'unset',
            backgroundColor: theme.palette.background.level2,
          }}
        >
          <CompetitiveAdvantagesIconContainer>
            <BeautifulIcon height={32} />
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Beautiful and easy to use.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Intuitive, robust and meticulous designed features to unlock your
            project's potential and give your followers a fresh shopping
            experience.
          </Typography>
        </Card>
      </CompetitiveAdvantagesCardsContainer>
    </SectionContainer>
  );
}
