import { useTheme } from 'styled-components';

import Grid from '../../../../components/Grid/Grid';
import Typography from '../../../../components/Typography/Typography';

import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm';
import {
  getCreateAccountFormContainerStyle,
  getCreateAccountTitleStyle,
} from './CreateAccountPage.styles';

export default function CreateAccountPage() {
  const theme = useTheme();

  const titleStyle = getCreateAccountTitleStyle(theme);
  const formContainerStyle = getCreateAccountFormContainerStyle(theme);

  return (
    <Grid container as="section" maxHeight justify="center">
      <Typography as="h1" variant="title3" style={titleStyle}>
        Create account
      </Typography>

      <CreateAccountForm style={formContainerStyle} />
    </Grid>
  );
}
