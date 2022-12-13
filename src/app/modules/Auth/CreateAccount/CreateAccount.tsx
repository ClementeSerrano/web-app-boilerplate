import { useTheme } from 'styled-components';

import Grid from '../../../components/Grid/Grid';

import CreateAccountForm from './components/CreateAccountForm/CreateAccountForm';
import CreateAccountBgCarousel from './components/CreateAccountBgCarousel/CreateAccountBgCarousel';
import { getCreateAccountFormContainerStyle } from './CreateAccount.styles';

export default function CreateAccount() {
  const theme = useTheme();

  const formContainerStyle = getCreateAccountFormContainerStyle(theme);

  return (
    <Grid container as="section" direction="row" maxHeight>
      <Grid fluid justify="center" style={formContainerStyle}>
        <CreateAccountForm />
      </Grid>

      <CreateAccountBgCarousel />
    </Grid>
  );
}
