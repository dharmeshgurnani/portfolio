import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './style/GlobalStyle';
import Typography from './style/Typography';
import App from './App';
import CustomCursor from './components/CustomCursor';
import CustomCursorManager from './components/CustomCursor/context/manager.tsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <CustomCursorManager>
    <CustomCursor />
    <React.StrictMode>
      <GlobalStyles />
      <Typography />
      <App />
    </React.StrictMode>
  </CustomCursorManager>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
