import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./components/themeProvider";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Toaster richColors /> */}
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);