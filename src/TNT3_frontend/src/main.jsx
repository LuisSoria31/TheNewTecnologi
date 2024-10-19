import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";

const client = Client.create({
  restCanisters: {
    backend: {
      baseUrl: "url de tu backend",
    },
  },
  providers: [
    new InternetIdentity({
      providerUrl: "url de tu internet identity",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IcpConnectContextProvider client={client}>
      <App/>
    </IcpConnectContextProvider>
  </React.StrictMode>,
);
