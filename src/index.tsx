import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeContextProvider } from './app/contexts/ThemeContext/ThemeContext';
import RootRoute from './app/routes/RootRoute';
import ErrorFallbackPage from './app/modules/Errors/ErrorFallbackScreen/ErrorFallbackScreen';
import reportWebVitals from './reportWebVitals';
// import PrivateRoute from './app/routes/PrivateRoute';
import CreateAccountRoute from './app/routes/CreateAccountRoute';
import './index.css';

const router = createBrowserRouter([
  {
    element: <RootRoute />,
    path: '*',
    errorElement: <ErrorFallbackPage />,
    children: [
      {
        path: 'create-account',
        element: <CreateAccountRoute />,
        errorElement: <ErrorFallbackPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
