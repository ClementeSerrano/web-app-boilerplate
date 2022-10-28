import { useTheme } from "styled-components";

import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";

import LoginBgCarousel from "./LoginBgCarousel";

export default function Login() {
  const theme = useTheme();

  return (
    <Grid as="section" container direction="row" maxHeight>
      <Grid fluid justify="center">
        <Typography as="h1" variant="title3">
          Welcome back, Clemente
        </Typography>

        <Button onClick={() => theme.toggleMode()}>Login</Button>
      </Grid>

      <LoginBgCarousel />
    </Grid>
  );
}
