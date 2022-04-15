import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Global Styles
import GlobalStyle from './index.styled';
import './index.css';

// Import Redux's store and provider
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Import from redux-persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
