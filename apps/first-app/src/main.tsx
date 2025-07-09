import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import RootLayout from './app/layouts/RootLayout';
import ErrorPage from './app/pages/ErrorPage';
import Home from './app/pages/Home';
import About from './app/pages/About';
import ConsoleLayout from './app/layouts/ConsoleLayout';
import Dashboard from './app/pages/console/Dashboard';
import Settings from './app/pages/console/Settings';
import Login from './app/pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      {
        path: 'console',
        element: <ConsoleLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
