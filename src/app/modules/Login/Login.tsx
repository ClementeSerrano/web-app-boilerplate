import { useTheme } from "styled-components";

import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import ErrorIllustration from "../../illustrations/ErrorIllustration";

export default function Login() {
  const theme = useTheme();

  console.log({ theme });

  return (
    <Grid container as="section" style={{ height: "100vh" }}>
      <h1 style={{ color: "white" }}>Welcome to Hey Backoffice!</h1>

      <Button onClick={() => theme.toggleMode()}>Toggle theme</Button>

      <ErrorIllustration />
    </Grid>
  );
}
