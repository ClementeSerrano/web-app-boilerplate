import { BrowserRouter as Router } from 'react-router-dom';

import { AccountsProvider } from './modules/Accounts/context/AccountsContext';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import Routes from './routes/Routes';

export default function App() {
  return (
    <AccountsProvider>
      <ThemeProvider>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AccountsProvider>
  );
}
