import { useState } from "react";
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

// const toggleTheme = () => {
//     const updatedTheme = isDarkTheme ? "light" : "dark";
//     setTheme(updatedTheme);
//     localStorage.setItem("theme", updatedTheme);
//   };
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme && ["dark", "light"].includes(savedTheme)) {
//       setTheme(savedTheme);
//     } else if (prefersDark) {
//       setTheme("dark");
//     }
//   }, []);

export default function ThemeContextProvider({ children }: WithChildren) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={{ ...theme[mode], mode, setMode, toggleMode }}>
      <>
        <GlobalStyle />

        {children}
      </>
    </ThemeProvider>
  );
}
