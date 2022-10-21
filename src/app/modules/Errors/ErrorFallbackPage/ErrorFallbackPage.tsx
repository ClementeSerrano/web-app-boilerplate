import { useRouteError } from "react-router-dom";

import Grid from "../../../components/Grid/Grid";

export default function ErrorFallbackPage() {
  const error: any = useRouteError();

  console.error(error);

  return (
    <Grid container as="section" id="error-page" style={{ height: "100vh" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Grid>
  );
}
