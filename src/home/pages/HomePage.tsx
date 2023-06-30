import { useTheme } from 'styled-components';

import { useDevice } from '../../common/contexts/DeviceContext/DeviceContext.hooks';
import { useDialog } from '../../common/hooks/useDialog';
import SectionContainer from '../../common/components/SectionContainer/SectionContainer';
import Typography from '../../common/components/Typography/Typography';
import ReloLogo from '../../common/assets/icons/ReloLogo';
import WaitingListDialog from '../../auth/components/WaitingListDialog/WaitingListDialog';

import { HomePageWaitingListButton } from './HomePage.styles';

/**
 * Home module main page.
 */
export default function HomePage() {
  const theme = useTheme();
  const device = useDevice();

  const waitingListDialog = useDialog();

  return (
    <>
      <SectionContainer>
        <ReloLogo
          height={device.isPhone ? 64 : 96}
          style={{ marginBottom: theme.spacing.md }}
        />

        <Typography as="h2" variant="title4" style={{ textAlign: 'center' }}>
          City settlement made easy.
        </Typography>

        <HomePageWaitingListButton onClick={waitingListDialog.handleOpen}>
          Join the Waitlist
        </HomePageWaitingListButton>
      </SectionContainer>

      <WaitingListDialog
        show={waitingListDialog.show}
        handleClose={waitingListDialog.handleClose}
      />
    </>
  );
}
