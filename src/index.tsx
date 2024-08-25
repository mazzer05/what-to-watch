import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkLoginAction, fetchFilms, fetchIsFavorite, fetchPromo } from './store/api-action';

store.dispatch(checkLoginAction());
store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(fetchIsFavorite());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>
);
