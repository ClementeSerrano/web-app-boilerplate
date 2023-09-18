import { useState } from 'react';
import { useTheme } from 'styled-components';
import ArrowIcon from '../../../../lib/assets/icons/ArrowIcon';

import Dialog from '../../../../components/Dialog/Dialog';
import FallbackComponent from '../../../../components/FallbackComponent/FallbackComponent';
import Typography from '../../../../components/Typography/Typography';
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
                invite you to try our new community risk assessment AI.
              </WaitingListDialogParagraph>

              <Typography
                as="a"
                variant="link"
                href="https://app.climeinvest.com/risk-assessments/trial"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: theme.typography.fontWeights.bold }}
              >
                Go to app{' '}
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
        <Typography
          as="legend"
          variant="paragraph1"
          color="level3"
          style={{ marginBottom: theme.spacing.sm }}
        >
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
