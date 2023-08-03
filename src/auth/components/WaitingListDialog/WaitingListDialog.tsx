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
          title="Great! Thanks for signing up"
          description={
            <>
              <WaitingListDialogParagraph variant="paragraph1" color="level3">
                You will be hearing from us very soon. In the meantime, we
                invite you to answer a few questions that will help us make
                Climeinvest the best solution for you.
              </WaitingListDialogParagraph>

              <Typography
                as="a"
                variant="link"
                href="https://3uzljrqqoz4.typeform.com/to/evVBKAwP"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: theme.typography.fontWeights.bold }}
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
          By submitting this form, you will get early access to Climeinvest.
        </Typography>

        <WaitingListForm onCompleted={() => setFormSubmitted(true)} />
      </>
    );
  };

  return (
    <Dialog show={show} style={{ maxWidth: theme.breakpoints.values.sm }}>
      <Dialog.Header>
        <Dialog.Title>Sign up</Dialog.Title>
        <Dialog.Close onClick={handleClose} />
      </Dialog.Header>

      <Dialog.Body style={{ overflowY: 'unset' }}>{renderBody()}</Dialog.Body>
    </Dialog>
  );
}
