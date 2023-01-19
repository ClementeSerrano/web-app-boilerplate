import Grid from '../../../../components/Grid/Grid';
import useAccountsManagement from '../../hooks/useAccountsManagement';
import AccountCard from './components/AccountCard/AccountCard';

export default function AccountsManager() {
  const {
    accounts,
    addAccount,
    deleteAccount,
    getAccount,
    updateAccountMetadata,
  } = useAccountsManagement();

  console.log({
    accounts,
    addAccount,
    deleteAccount,
    getAccount,
    updateAccountMetadata,
  });

  return (
    <Grid>
      {accounts.map(account => (
        <AccountCard key={account.metadata.address} account={account} />
      ))}
    </Grid>
  );
}
