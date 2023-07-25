import { useTheme } from 'styled-components';
import ReloLogo from '../../../../common/assets/icons/ReloLogo';
import Button from '../../../../common/components/Button/Button';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import {
  StartTodayTitle,
  StartTodaySubtitle,
} from './StartTodaySection.styles';

export default function StartTodaySection() {
  const theme = useTheme();

  return (
    <SectionContainer variant="level2">
      <ReloLogo
        variant="isotype"
        height={88}
        style={{
          marginBottom: theme.spacing.md,
          backgroundColor: theme.colors.black.main,
          padding: 16,
          borderRadius: 24,
        }}
      />

      <StartTodayTitle variant="title2">
        Start today with Climevest
      </StartTodayTitle>

      <StartTodaySubtitle variant="title5" color="level3">
        We are the most convenient platform for entrepreneurs. State-of-the-art
        technology to grow your project.
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
