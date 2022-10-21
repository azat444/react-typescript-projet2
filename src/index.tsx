import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ListPage from "./pages/List";
import HomePage from "./pages/Home";
import { AnimalProvider } from "./context/animalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnimalProvider>
      <RouterProvider router={router} />
    </AnimalProvider>
  </React.StrictMode>
);
