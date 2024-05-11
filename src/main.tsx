import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ReduxProvider from "./providers/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);
