import Button from '../../../../components/Button/Button';
import { WithStyle } from '../../../../components/components.types';
import useCurrentAccount from '../../../Accounts/hooks/useCurrentAccount';

export default function AuthButton({ style, className }: WithStyle) {
  const [currentAccount] = useCurrentAccount();

  if (currentAccount) {
    // TODO: Make avatar component that opens accounts manager in modal.
    return <div>Avatar</div>;
  }

  return (
    <Button variant="primary" size="sm" style={style} className={className}>
      Log in
    </Button>
  );
}
