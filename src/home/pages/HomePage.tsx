import { useTheme } from 'styled-components';
import ReloLogo from '../../common/assets/icons/ReloLogo';

import { useDevice } from '../../common/contexts/DeviceContext/DeviceContext.hooks';
import Grid from '../../common/components/Grid/Grid';
import SectionContainer from '../../common/components/SectionContainer/SectionContainer';
import Typography from '../../common/components/Typography/Typography';
import JoinWaitingListForm from '../components/JoinWaitingListForm/JoinWaitingListForm';

/**
 * Home module main page.
 */
export default function HomePage() {
  const theme = useTheme();
  const device = useDevice();

  return (
    <SectionContainer>
      <ReloLogo
        height={device.isPhone ? 64 : 96}
        style={{ marginBottom: theme.spacing.md }}
      />

      <Typography as="h2" variant="title4" style={{ textAlign: 'center' }}>
        City settlement made easy.
      </Typography>

      <JoinWaitingListForm />

      <Grid as="footer" style={{ marginTop: 24 }}>
        <Typography
          as="legend"
          variant="paragraph1"
          color="level3"
          style={{ textAlign: 'center' }}
        >
          Notify me when the platform is launched.
        </Typography>
      </Grid>
    </SectionContainer>
  );
}
