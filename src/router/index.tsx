import App from "@/App";
import { About } from "@/pages/About";
import { Analytics } from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      { Component: About, path: "about" },
      { Component: Analytics, path: "analytics" },
      // {Component: , path: "/"},
    ],
  },
  // {Component: , path: "/"},
]);
