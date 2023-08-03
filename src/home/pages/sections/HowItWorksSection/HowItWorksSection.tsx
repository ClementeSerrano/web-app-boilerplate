import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import Typography from '../../../../common/components/Typography/Typography';
import Card from '../../../../common/components/Card/Card';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';

import {
  CompetitiveAdvantagesCardsContainer,
  CompetitiveAdvantagesIconContainer,
} from './HowItWorksSection.styles';

export default function HowItWorksSection() {
  const { isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer withSeparator>
      <Typography
        as="h1"
        variant="title3"
        style={{ textAlign: 'center', marginBottom: theme.spacing.lg }}
      >
        How it works.
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
            <Typography
              as="h1"
              variant="title4"
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              1.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Access vetted projects
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            You can access the list of projects currently available for funding
            and view all the relevant details.
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
            <Typography
              as="h1"
              variant="title4"
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              2.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Choose a project to invest in
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Choose a project to invest in that matches your climate impact and financial
            expectations.
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
            <Typography
              as="h1"
              variant="title4"
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              3.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Climeinvest pools the funds
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            We pool all the investor funds together and invest in the project
            through an SPV structure. Each investor receives their shares in the project.
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
            <Typography
              as="h1"
              variant="title4"
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              4.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Ongoing monitoring
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Once invested, you can monitor the status of
            the project and see the value of your portfolio.
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
            <Typography
              as="h1"
              variant="title4"
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              5.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Get a return on your investment
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Trade your shares with other investors on our marketplace or wait
            till we sell the entire stake in the project.
          </Typography>
        </Card>
      </CompetitiveAdvantagesCardsContainer>
    </SectionContainer>
  );
}
