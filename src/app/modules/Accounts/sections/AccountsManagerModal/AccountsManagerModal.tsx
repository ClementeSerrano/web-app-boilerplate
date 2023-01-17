import Dialog from '../../../../components/Dialog/Dialog';
import AccountsManager from '../../components/AccountsManager/AccountsManager';

import { AccountsManagerModalProps } from './AccountsManagerModal.types';

/**
 * Renders the accounts manager in a modal format.
 * @param onClose - Callback to call when the close action of the modal is called.
 */
export default function AccountsManagerModal({
  onClose,
}: AccountsManagerModalProps) {
  return (
    <Dialog show>
      <Dialog.Header>
        <Dialog.Title>Manage accounts</Dialog.Title>

        <Dialog.Close onClick={onClose} />
      </Dialog.Header>

      <AccountsManager />
    </Dialog>
  );
}
