// main.tsx or main.jsx
import React  from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App";
import "@/css/index.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// useEffect(() => {
//   AOS.init({
//       disable: false,
//       startEvent: 'DOMContentLoaded',
//       initClassName: 'aos-init',
//       animatedClassName: 'aos-animate',
//       useClassNames: false,
//       disableMutationObserver: false,
//       easing: 'ease',
//       once: true,
//       mirror: false,
//       anchorPlacement: 'top-bottom',
//   });
// }, []);
const rootElement = document.getElementById("root");

if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HeroUIProvider  >
        <main className="  text-black bg-white">
            <App />
          </main>
      </HeroUIProvider>
    </React.StrictMode>
  );
}