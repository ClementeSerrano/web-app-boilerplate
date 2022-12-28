import { useAccounts } from '../context/AccountsContext.hooks';

export default function useCurrentAccount() {
  const { currentAccount, setCurrentAccount } = useAccounts();

  return [currentAccount, setCurrentAccount];
}
