import { BrowserRouter as Router } from 'react-router-dom';

import { DeviceProvider } from './contexts/DeviceContext/DeviceContext';
import { LayoutProvider } from './contexts/LayoutContext/LayoutContext';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { AccountsProvider } from './modules/Accounts/context/AccountsContext';
import Routes from './routes/Routes';

export default function App() {
  return (
    <DeviceProvider>
      <LayoutProvider>
        <AccountsProvider>
          <ThemeProvider>
            <Router>
              <Routes />
            </Router>
          </ThemeProvider>
        </AccountsProvider>
      </LayoutProvider>
    </DeviceProvider>
  );
}
