import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import { WithStyle } from '../../../../components/components.types';
import Dialog from '../../../../components/Dialog/Dialog';
import useCurrentAccount from '../../../Accounts/hooks/useCurrentAccount';

export default function AuthButton({ style, className }: WithStyle) {
  const [show, setShow] = useState(false);

  const [currentAccount] = useCurrentAccount();

  if (currentAccount) {
    // TODO: Make avatar component that opens accounts manager in modal.
    return <div>Avatar</div>;
  }

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        style={style}
        className={className}
        onClick={() => setShow(true)}
      >
        Log in
      </Button>

      <Dialog show={show}>
        <Dialog.Header>
          <Dialog.Title>pico</Dialog.Title>

          <Dialog.Close onClick={() => setShow(false)} />
        </Dialog.Header>

        <Dialog.Body>sdsdfsdfss</Dialog.Body>

        <Dialog.Footer>footer</Dialog.Footer>
      </Dialog>
    </>
  );
}
