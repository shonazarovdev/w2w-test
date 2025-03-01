import React from "react";
import ReactDOM from "react-dom/client";
import '@ant-design/v5-patch-for-react-19';

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
