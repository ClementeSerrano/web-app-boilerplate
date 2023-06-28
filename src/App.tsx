import { BrowserRouter as Router } from 'react-router-dom';

import { DeviceProvider } from './common/contexts/DeviceContext/DeviceContext';
import { LayoutProvider } from './common/contexts/LayoutContext/LayoutContext';
import { ThemeProvider } from './common/contexts/ThemeContext/ThemeContext';
import Routes from './routes/Routes';

export default function App() {
  return (
    <DeviceProvider>
      <LayoutProvider>
        <ThemeProvider>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </LayoutProvider>
    </DeviceProvider>
  );
}
