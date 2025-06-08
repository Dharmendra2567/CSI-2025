import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';

// Register your Syncfusion license key here
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF1cWWhOYVRpR2Nbek5xflFFal9SVAciSV9jS3tTcEVkWX5ac3dTQGBfWU90Vg==');

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
