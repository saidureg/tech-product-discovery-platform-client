import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./route/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <HelmetProvider>
        <div className="font-roboto">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </HelmetProvider>
    </React.StrictMode>
  </AuthProvider>
);
