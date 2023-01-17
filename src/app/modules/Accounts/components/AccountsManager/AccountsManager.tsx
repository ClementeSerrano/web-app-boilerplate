import Grid from '../../../../components/Grid/Grid';
import Typography from '../../../../components/Typography/Typography';
import useAccountsManagement from '../../hooks/useAccountsManagement';

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
        <Typography key={account.metadata.address}>
          {account.metadata.name}
        </Typography>
      ))}
    </Grid>
  );
}
