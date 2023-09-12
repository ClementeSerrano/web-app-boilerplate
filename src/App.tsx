import { BrowserRouter as Router } from 'react-router-dom';

import { APIProvider } from 'lib/api/APIProvider';
import { AlertsProvider } from 'contexts/AlertsContext/AlertsContext';
import { DeviceProvider } from 'contexts/DeviceContext/DeviceContext';
import { LayoutProvider } from 'contexts/LayoutContext/LayoutContext';
import { ThemeProvider } from 'contexts/ThemeContext/ThemeContext';
import Routes from './routes/Routes';

export default function App() {
  return (
    <APIProvider>
      <DeviceProvider>
        <LayoutProvider>
          <ThemeProvider>
            <AlertsProvider>
              <Router>
                <Routes />
              </Router>
            </AlertsProvider>
          </ThemeProvider>
        </LayoutProvider>
      </DeviceProvider>
    </APIProvider>
  );
}
