import { useTheme } from 'styled-components';

import Dialog from '../../../common/components/Dialog/Dialog';
import Typography from '../../../common/components/Typography/Typography';
import WaitingListForm from '../WaitingListForm/WaitingListForm';

export default function WaitingListDialog({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme();

  return (
    <Dialog show={show} style={{ maxWidth: theme.breakpoints.values.sm }}>
      <Dialog.Header>
        <Dialog.Title>Join the Waitlist</Dialog.Title>
        <Dialog.Close onClick={handleClose} />
      </Dialog.Header>

      <Dialog.Body>
        <Typography as="legend" variant="paragraph1" color="level3">
          By submitting this form, you will join our waitlist to get early
          access to Relo. We will reach out when the platform is launched.
        </Typography>
        <WaitingListForm />
      </Dialog.Body>
    </Dialog>
  );
}
