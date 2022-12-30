import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Dialog from '../../../../components/Dialog/Dialog';

import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm';
import { getCreateAccountFormContainerStyle } from './CreateAccountModal.styles';

export default function CreateAccountModal() {
  const navigate = useNavigate();

  const theme = useTheme();

  const formContainerStyle = getCreateAccountFormContainerStyle(theme);

  return (
    <Dialog show>
      <Dialog.Header>
        <Dialog.Title>Create an account</Dialog.Title>

        <Dialog.Close onClick={() => navigate(-1)} />
      </Dialog.Header>

      <Dialog.Body>
        <CreateAccountForm style={formContainerStyle} />
      </Dialog.Body>
    </Dialog>
  );
}
