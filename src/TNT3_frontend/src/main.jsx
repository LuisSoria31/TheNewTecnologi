import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";

const client = Client.create({
  restCanisters: {
    backend: {
      baseUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943",
    },
  },
  providers: [
    new InternetIdentity({
      providerUrl: "http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/",
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
