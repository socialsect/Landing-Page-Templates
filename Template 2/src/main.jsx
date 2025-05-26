// main.jsx or index.jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Only load Speed Insights in production
if (import.meta.env.PROD) {
  import('@vercel/speed-insights').then(({ init }) => {
    init();
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);