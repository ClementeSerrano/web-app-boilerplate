import logo from "../logo.svg";
import "./App.css";

import ThemeContextProvider from "./contexts/ThemeContext/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Hey Backoffice!</p>
        </header>
      </div>
    </ThemeContextProvider>
  );
}
