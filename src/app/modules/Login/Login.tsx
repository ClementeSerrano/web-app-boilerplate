import { useTheme } from "styled-components";

import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";

export default function Login() {
  const theme = useTheme();

  return (
    <Grid container as="section" style={{ height: "100vh" }}>
      <Typography as="h1" variant="title3">
        Login to Hey
      </Typography>

      <Button onClick={() => theme.toggleMode()}>Login</Button>
    </Grid>
  );
}
