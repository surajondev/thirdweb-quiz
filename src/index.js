import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThirdwebProvider } from "@3rdweb/react";

const supportedChainIds = [80001];

const connectors = {
  injected: {}
};

ReactDOM.render(
      <ThirdwebProvider 
        connectors={connectors} 
        supportedChainIds={supportedChainIds}
        className="app">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThirdwebProvider>,
  document.getElementById('root')
);
