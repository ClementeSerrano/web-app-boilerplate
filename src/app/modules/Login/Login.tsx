import { useTheme } from "styled-components";

import logo from "../../../logo.svg";
import "../../App.css";
import Button from "../../components/Button/Button";

export default function Login() {
  const theme = useTheme();

  console.log({ theme });

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <p>Welcome to Hey Backoffice!</p>

      <Button onClick={() => theme.toggleMode()}>Toggle theme</Button>
    </div>
  );
}
