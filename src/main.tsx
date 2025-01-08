// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "@/css/index.css";
 

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <NextUIProvider  >
        <main className="  text-black bg-white">
            <App />
          </main>
      </NextUIProvider>
    </React.StrictMode>
  );
}