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

      <StartTodayTitle variant="title2">
        Project developer? Raise financing today
      </StartTodayTitle>

      <StartTodaySubtitle variant="title5" color="level3">
        We are revolutionising the way nature investments are made. Get in touch
        if you are raising financing to build your nature project
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
