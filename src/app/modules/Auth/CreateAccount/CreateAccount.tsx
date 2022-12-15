import { useTheme } from 'styled-components';

import Grid from '../../../components/Grid/Grid';

import CreateAccountForm from './components/CreateAccountForm/CreateAccountForm';
import { getCreateAccountFormContainerStyle } from './CreateAccount.styles';

export default function CreateAccount() {
  const theme = useTheme();

  const formContainerStyle = getCreateAccountFormContainerStyle(theme);

  return (
    <Grid container as="section" direction="row" maxHeight>
      <CreateAccountForm style={formContainerStyle} />
    </Grid>
  );
}
