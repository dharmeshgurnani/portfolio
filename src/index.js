import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CustomCursor from './components/CustomCursor';
import CustomCursorManager from './components/CustomCursor/context/manager.tsx';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './style/GlobalStyle.scss';
import './style/Typography.scss';

const root = createRoot(document.getElementById('root'));
AOS.init();

root.render(
  <CustomCursorManager>
    <CustomCursor />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CustomCursorManager>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
