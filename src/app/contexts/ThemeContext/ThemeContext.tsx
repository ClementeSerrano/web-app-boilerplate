import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "../../theme/theme";
import { WithChildren } from "../../components/components.types";
import { ThemeMode } from "../../theme/theme.types";

const GlobalStyle = createGlobalStyle`  
  h1,h2,h3,h4,h5,h6,p,b,a {
    margin: 0;
  }
`;

export function ThemeContextProvider({ children }: WithChildren) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => {
    const updatedMode = mode === "light" ? "dark" : "light";

    setMode(updatedMode);

    localStorage.setItem("theme", updatedMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setMode(savedTheme);
    } else if (prefersDark) {
      setMode("dark");
    }
  }, []);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={{ ...theme[mode], mode, setMode, toggleMode }}>
        {children}
      </ThemeProvider>
    </>
  );
}
