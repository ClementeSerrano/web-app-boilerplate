import { useTheme } from "styled-components";
import Grid from "../../../components/Grid/Grid";

import RegisterBgCarousel from "./components/RegisterBgCarousel/RegisterBgCarousel";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { getRegisterFormContainerStyle } from "./Register.styles";

export default function Register() {
  const theme = useTheme();

  const formContainerStyle = getRegisterFormContainerStyle(theme);

  return (
    <Grid container as="section" direction="row" maxHeight>
      <Grid fluid justify="center" style={formContainerStyle}>
        <RegisterForm />
      </Grid>

      <RegisterBgCarousel />
    </Grid>
  );
}
