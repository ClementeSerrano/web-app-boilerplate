import { useTheme } from 'styled-components';

import { useDialog } from '../../common/hooks/useDialog';
import SectionContainer from '../../common/components/SectionContainer/SectionContainer';
import Typography from '../../common/components/Typography/Typography';
import WaitingListDialog from '../../auth/components/WaitingListDialog/WaitingListDialog';
import ArrowIcon from '../../common/assets/icons/ArrowIcon';

import { HomePageWaitingListButton } from './HomePage.styles';

/**
 * Home module main page.
 */
export default function HomePage() {
  const theme = useTheme();

  const waitingListDialog = useDialog();

  return (
    <>
      <SectionContainer>
        <Typography
          as="h1"
          variant="title1"
          style={{
            textAlign: 'center',
            marginBottom: theme.spacing.md,
            maxWidth: theme.breakpoints.values.sm,
          }}
        >
          Relocation redesigned.
        </Typography>

        <Typography
          as="h2"
          variant="title5"
          color="level3"
          style={{ textAlign: 'center', maxWidth: theme.breakpoints.values.sm }}
        >
          Bypass Germany's complex bureaucracy with Relo. Embrace your new life
          with confidence and simplicity.
        </Typography>

        <HomePageWaitingListButton onClick={waitingListDialog.handleOpen}>
          Join the Waitlist{' '}
          <ArrowIcon height={16} style={{ marginLeft: theme.spacing.xxs }} />
        </HomePageWaitingListButton>
      </SectionContainer>

      <WaitingListDialog
        show={waitingListDialog.show}
        handleClose={waitingListDialog.handleClose}
      />
    </>
  );
}
