import { useState } from 'react';
import { useTheme } from 'styled-components';
import ArrowIcon from '../../../common/assets/icons/ArrowIcon';

import Dialog from '../../../common/components/Dialog/Dialog';
import FallbackComponent from '../../../common/components/FallbackPage/FallbackComponent';
import Typography from '../../../common/components/Typography/Typography';
import WaitingListForm from '../WaitingListForm/WaitingListForm';
import { WaitingListDialogParagraph } from './WaitingListDialog.styles';

export default function WaitingListDialog({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const theme = useTheme();

  const renderBody = () => {
    if (formSubmitted) {
      return (
        <FallbackComponent
          type="success"
          title="You're now part of our community ❤️"
          description={
            <>
              <WaitingListDialogParagraph variant="paragraph1" color="level3">
                You will be hearing from us very soon ☺️ In the meantime, we
                invite you to answer a few questions that will help us making
                Relo the best solution for you.
              </WaitingListDialogParagraph>

              <Typography
                as="a"
                variant="link"
                href="https://mb1n22472ic.typeform.com/to/Lw9dJfOz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to survey{' '}
                <ArrowIcon
                  height={12}
                  style={{ marginLeft: theme.spacing.xs }}
                />
              </Typography>
            </>
          }
        />
      );
    }

    return (
      <>
        <Typography as="legend" variant="paragraph1" color="level3">
          By submitting this form, you will join our waitlist to get early
          access to Relo.
        </Typography>

        <WaitingListForm onCompleted={() => setFormSubmitted(true)} />
      </>
    );
  };

  return (
    <Dialog show={show} style={{ maxWidth: theme.breakpoints.values.sm }}>
      <Dialog.Header>
        <Dialog.Title>Join the Waitlist</Dialog.Title>
        <Dialog.Close onClick={handleClose} />
      </Dialog.Header>

      <Dialog.Body>{renderBody()}</Dialog.Body>
    </Dialog>
  );
}
