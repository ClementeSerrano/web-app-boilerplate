import { useTheme } from 'styled-components';

import Grid from '../../../../components/Grid/Grid';

import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm';
import { getCreateAccountFormContainerStyle } from './CreateAccountPage.styles';

export default function CreateAccountPage() {
  const theme = useTheme();

  const formContainerStyle = getCreateAccountFormContainerStyle(theme);

  return (
    <Grid container as="section" direction="row" maxHeight>
      <CreateAccountForm style={formContainerStyle} />
    </Grid>
  );
}
