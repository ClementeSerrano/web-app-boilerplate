import { RouterProvider } from 'react-router-dom';

import { AccountsProvider } from './modules/Accounts/context/AccountsContext';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import router from './routes/router';

export default function App() {
  return (
    <AccountsProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AccountsProvider>
  );
}
