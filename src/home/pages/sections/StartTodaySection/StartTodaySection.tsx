import { useTheme } from 'styled-components';

import Logo from '../../../../common/assets/icons/Logo';
import Button from '../../../../common/components/Button/Button';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import {
  StartTodayTitle,
  StartTodaySubtitle,
} from './StartTodaySection.styles';

export default function StartTodaySection() {
  const theme = useTheme();

  return (
    <SectionContainer style={{ paddingTop: 0 }}>
      <Logo
        variant="isotype"
        height={88}
        style={{
          marginBottom: theme.spacing.md,
          backgroundColor: theme.colors.gray.superDark,
          padding: 16,
          borderRadius: 24,
        }}
      />

      <StartTodayTitle variant="title3">
        Project developer? <br /> Get in touch.
      </StartTodayTitle>

      <StartTodaySubtitle variant="title5" color="level3">
        We invest in developers at early stages that are building high quality
        projects. We help you raise financing and get to verification up to 50%
        faster.
      </StartTodaySubtitle>

      <Button
        variant="primary"
        as="a"
        href="mailto:info@climeinvest.com?subject=I%20want%20to%20start%20with%20ClimeInvest"
      >
        Contact us
      </Button>
    </SectionContainer>
  );
}
