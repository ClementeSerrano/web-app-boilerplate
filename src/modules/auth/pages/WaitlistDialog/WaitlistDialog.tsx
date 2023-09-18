import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Dialog from 'components/Dialog/Dialog';
import FallbackComponent from 'components/FallbackComponent/FallbackComponent';
import Typography from 'components/Typography/Typography';
import WaitlistForm from '../../components/WaitlistForm/WaitlistForm';
import { WaitlistDialogParagraph } from './WaitlistDialog.styles';
import { useAlerts } from 'lib/hooks/useAlerts';

export default function WaitlistDialog() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const { showErrorSnackbar } = useAlerts();

  const theme = useTheme();

  const handleClose = () => navigate(-1);

  const handleOnCompleted = () => setFormSubmitted(true);

  const handleOnError = () =>
    showErrorSnackbar({
      message: 'Error registering your profile. Please try again later.',
    });

  return (
    <Dialog show style={{ maxWidth: theme.breakpoints.values.sm }}>
      <Dialog.Header>
        <Dialog.Title>Sign up</Dialog.Title>
        <Dialog.Close onClick={handleClose} />
      </Dialog.Header>

      <Dialog.Body style={{ overflowY: 'unset' }}>
        {!formSubmitted ? (
          <>
            <Typography
              as="legend"
              variant="paragraph1"
              color="level3"
              style={{ marginBottom: theme.spacing.sm }}
            >
              By submitting this form, you will get early access to Climeinvest.
            </Typography>

            <WaitlistForm
              onCompleted={handleOnCompleted}
              onError={handleOnError}
            />
          </>
        ) : (
          <FallbackComponent
            type="success"
            title="Great! Thanks for signing up"
            description={
              <WaitlistDialogParagraph variant="paragraph1" color="level3">
                You will be hearing from us very soon.
              </WaitlistDialogParagraph>
            }
          />
        )}
      </Dialog.Body>
    </Dialog>
  );
}
