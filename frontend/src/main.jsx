import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

import { PlayerProvider } from "./context/PlayerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <App />
      <Toaster
       
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#17171d",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "14px",
    },

    success: {
      iconTheme: {
        primary: "#ec4899",
        secondary: "#ffffff",
      },
    },

    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },
  }}
/>
      
    </PlayerProvider>
  </StrictMode>
);