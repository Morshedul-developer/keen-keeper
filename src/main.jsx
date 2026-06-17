import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/Routes";
import FriendsContextProvider from "./context/FriendsContextProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <FriendsContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </FriendsContextProvider>
  </StrictMode>,
);
