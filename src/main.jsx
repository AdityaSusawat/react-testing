import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Art } from "./pages/Art.jsx";
import { ToDo } from "./pages/ToDo.jsx";
import { StepForm } from "./pages/StepForm.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Redux from "./pages/Redux.jsx";
import { store } from "../redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/art",
    element: <Art />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/stepform",
    element: <StepForm />,
  },
  {
    path: "/redux",
    element: <Redux />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
