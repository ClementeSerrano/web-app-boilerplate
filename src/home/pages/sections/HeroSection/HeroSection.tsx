import { useTheme } from 'styled-components';

import { useDialog } from '../../../../common/hooks/useDialog';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import WaitingListDialog from '../../../../auth/components/WaitingListDialog/WaitingListDialog';
import ArrowIcon from '../../../../common/assets/icons/ArrowIcon';
import UserResearchFormButton from '../../../components/UserResearchFormButton/UserResearchFormButton';

import {
  HomePageSubtitle,
  HomePageTitle,
  HomePageWaitingListButton,
} from './HeroSection.styles';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const theme = useTheme();

  const waitingListDialog = useDialog();

  return (
    <>
      <SectionContainer>
        <UserResearchFormButton style={{ marginBottom: theme.spacing.sm }} />

        <HomePageTitle variant="title2">
          Invest your money directly in nature.
        </HomePageTitle>

        <HomePageSubtitle variant="title5" color="level3">
          Invest in nature-based carbon removal projects for both financial
          returns and climate impact.
        </HomePageSubtitle>

        <HomePageWaitingListButton onClick={waitingListDialog.handleOpen}>
          Join the Waitlist{' '}
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