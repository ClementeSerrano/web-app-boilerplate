import logo from "../logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

import ThemeContextProvider from "./contexts/ThemeContext/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Hey Backoffice!</p>

          <Button>Toggle theme</Button>
        </header>
      </div>
    </ThemeContextProvider>
  );
}
