import { BrowserRouter as Router } from 'react-router-dom';

import { AccountsProvider } from './modules/Accounts/context/AccountsContext';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import Routes from './routes/Routes';
import { DeviceProvider } from './contexts/DeviceContext/DeviceContext';

export default function App() {
  return (
    <DeviceProvider>
      <AccountsProvider>
        <ThemeProvider>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </AccountsProvider>
    </DeviceProvider>
  );
}
