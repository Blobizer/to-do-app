import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Completed from './pages/Completed.jsx';

import { BrowserRouter, Route, Routes } from 'react-router';
import store from './redux/storage.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
