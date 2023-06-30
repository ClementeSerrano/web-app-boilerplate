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
  return (
    <Dialog show={show}>
      <Dialog.Header>
        <Dialog.Title>Join the Waitlist</Dialog.Title>
        <Dialog.Close onClick={handleClose} />
      </Dialog.Header>
      <Dialog.Body>
        <WaitingListForm />
      </Dialog.Body>

      <Dialog.Footer>
        <Typography
          as="legend"
          variant="paragraph1"
          color="level3"
          style={{ textAlign: 'center' }}
        >
          Notify me when the platform is launched.
        </Typography>
      </Dialog.Footer>
    </Dialog>
  );
}
