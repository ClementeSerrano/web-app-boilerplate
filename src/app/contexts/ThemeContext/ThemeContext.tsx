import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "../../theme/theme";
import { ThemeMode } from "../../theme/theme.types";

const GlobalStyle = createGlobalStyle`
  p {
    line-height: 24px;
    margin: 0;
  }
  h1,h2,h3,h4 {
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

  console.log({ themeeee: theme[mode] });

  return (
    <ThemeProvider theme={{ ...theme[mode], mode, setMode, toggleMode }}>
      <>
        <GlobalStyle />

        {children}
      </>
    </ThemeProvider>
  );
}
