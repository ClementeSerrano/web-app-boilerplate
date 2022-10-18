import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContext";
import Login from "./modules/Login/Login";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </ThemeContextProvider>
  );
}
