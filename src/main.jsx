import { BrowserRouter } from 'react-router';
import store from './redux/storage.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
