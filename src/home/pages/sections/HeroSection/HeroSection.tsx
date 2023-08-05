import { useTheme } from 'styled-components';

import { useDialog } from '../../../../common/hooks/useDialog';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import WaitingListDialog from '../../../../auth/components/WaitingListDialog/WaitingListDialog';
import ArrowIcon from '../../../../common/assets/icons/ArrowIcon';
import InformativePill from '../../../../common/components/InformativePill/InformativePill';

import {
  HomePageSubtitle,
  HomePageTitle,
  HomePageWaitingListButton,
} from './HeroSection.styles';
import BoltCircledIcon from '../../../../common/assets/icons/BoltCircledIcon';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const theme = useTheme();

  const waitingListDialog = useDialog();

  return (
    <>
      <SectionContainer style={{ paddingBottom: theme.spacing.xl }}>
        <InformativePill style={{ marginBottom: theme.spacing.sm }}>
          <BoltCircledIcon
            height={16}
            style={{ marginRight: theme.spacing.xs }}
          />{' '}
          Up to 4x returns
        </InformativePill>

        <HomePageTitle variant="title2">
          Invest your money directly in nature. <br />
        </HomePageTitle>

        <HomePageSubtitle variant="title5" color="level3">
          Allocate a part of your portfolio to nature-based climate projects
          today.
        </HomePageSubtitle>

        <HomePageWaitingListButton onClick={waitingListDialog.handleOpen}>
          Sign up now{' '}
          <ArrowIcon height={16} style={{ marginLeft: theme.spacing.xxs }} />
        </HomePageWaitingListButton>
      </SectionContainer>

      {waitingListDialog.show && (
        <WaitingListDialog
          show={waitingListDialog.show}
          handleClose={waitingListDialog.handleClose}
        />
      )}
    </>
  );
}
