import Grid from "../../components/Grid/Grid";

import RegisterBgCarousel from "./components/RegisterBgCarousel/RegisterBgCarousel";
import RegisterForm from "./components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <Grid as="section" container direction="row" maxHeight>
      <Grid fluid justify="center">
        <RegisterForm />
      </Grid>

      <RegisterBgCarousel />
    </Grid>
  );
}
