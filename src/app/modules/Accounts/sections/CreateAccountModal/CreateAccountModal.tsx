import Dialog from '../../../../components/Dialog/Dialog';
import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm';

import { CreateAccountModalProps } from './CreateAccountModal.types';

/**
 * Renders the user create account form in a modal format.
 * @param onClose - Callback to call when the close action of the modal is called.
 */
export default function CreateAccountModal({
  onClose,
}: CreateAccountModalProps) {
  return (
    <Dialog show>
      <Dialog.Header>
        <Dialog.Title>Create an account</Dialog.Title>

        <Dialog.Close onClick={onClose} />
      </Dialog.Header>

      <CreateAccountForm />
    </Dialog>
  );
}
