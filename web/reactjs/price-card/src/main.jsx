import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="fixed inset-0 -z-1"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      {/* Your Content/Components */}
      <App />
    </div>
  </StrictMode>,
);
