import Dialog from '../../../../components/Dialog/Dialog';
import AddAccountForm from '../../components/AddAccountForm/AddAccountForm';

import { AddAccountModalProps } from './AddAccountModal.types';

/**
 * Renders the user create account form in a modal format.
 * @param onClose - Callback to call when the close action of the modal is called.
 */
export default function AddAccountModal({ onClose }: AddAccountModalProps) {
  return (
    <Dialog show>
      <Dialog.Header>
        <Dialog.Title>Add an account</Dialog.Title>

        <Dialog.Close onClick={onClose} />
      </Dialog.Header>

      <AddAccountForm />
    </Dialog>
  );
}
