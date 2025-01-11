import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

import { Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoginPage /> */}
    {/* <RegisterPage /> */}
    <Home />
  </StrictMode>
);
