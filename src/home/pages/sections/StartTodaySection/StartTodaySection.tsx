import { useTheme } from 'styled-components';
import ReloLogo from '../../../../common/assets/icons/Logo';
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
      <ReloLogo
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
        We are revolutionising the way nature investments are made. Get in touch if you are raising financing to build your nature project.
      </StartTodaySubtitle>

      <Button
        variant="primary"
        href="mailto:clementeserranosutil@gmail.com?subject=I%20want%20to%20start%20with%20grafito%20.app"
      >
        Start now
      </Button>
    </SectionContainer>
  );
}
