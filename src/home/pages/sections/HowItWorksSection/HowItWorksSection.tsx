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
              style={{ color: theme.palette.primary.main }}
            >
              1.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Access list of projects.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            You can access the list of projects currently available for funding
            and view all the impact and financial details.
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
              style={{ color: theme.palette.primary.main }}
            >
              2.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Choose project.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Choose a project to invest in that matches your impact and financial
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
              style={{ color: theme.palette.primary.main }}
            >
              3.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            SVV Management.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            We pool all the investor funds together and invest in the project
            through an SPV.
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
              style={{ color: theme.palette.primary.main }}
            >
              4.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Monitor project & investment.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            Once invested, you can monitor the impact and financial status of
            the projects and see the value of your portfolio.
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
              style={{ color: theme.palette.primary.main }}
            >
              5.
            </Typography>
          </CompetitiveAdvantagesIconContainer>

          <Typography
            as="h2"
            variant="title6"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Exit investment.
          </Typography>

          <Typography as="p" variant="paragraph1" color="level3">
            If needed, exit your investment on our internal marketplace or wait
            till we sell the entire stake in the project.
          </Typography>
        </Card>
      </CompetitiveAdvantagesCardsContainer>
    </SectionContainer>
  );
}
