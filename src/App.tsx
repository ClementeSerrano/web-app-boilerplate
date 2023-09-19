import { BrowserRouter as Router } from 'react-router-dom';

import { APIProvider } from 'lib/api/APIProvider';
import { AlertsProvider } from 'contexts/AlertsContext/AlertsContext';
import { DeviceProvider } from 'contexts/DeviceContext/DeviceContext';
import { LayoutProvider } from 'contexts/LayoutContext/LayoutContext';
import { ThemeProvider } from 'contexts/ThemeContext/ThemeContext';
import Routes from './routes/Routes';
import AuthProfileProvider from 'modules/auth/contexts/AuthProfileProvider';
import { GAProvider } from 'modules/rum/contexts/GAProvider';

export default function App() {
  return (
    <APIProvider>
      <DeviceProvider>
        <LayoutProvider>
          <ThemeProvider>
            <AlertsProvider>
              <AuthProfileProvider>
                <Router>
                  <GAProvider enabled={process.env.NODE_ENV === 'production'}>
                    <Routes />
                  </GAProvider>
                </Router>
              </AuthProfileProvider>
            </AlertsProvider>
          </ThemeProvider>
        </LayoutProvider>
      </DeviceProvider>
    </APIProvider>
  );
}
