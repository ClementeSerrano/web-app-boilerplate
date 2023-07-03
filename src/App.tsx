import { BrowserRouter as Router } from 'react-router-dom';

import { APIProvider } from './api/APIProvider';
import { AlertsProvider } from './common/contexts/AlertsContext/AlertsContext';
import { DeviceProvider } from './common/contexts/DeviceContext/DeviceContext';
import { LayoutProvider } from './common/contexts/LayoutContext/LayoutContext';
import { ThemeProvider } from './common/contexts/ThemeContext/ThemeContext';
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
