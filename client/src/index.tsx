import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Import Global Styles
import GlobalStyle from './index.styled';
import './index.css';

// Import Redux's store and provider
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
