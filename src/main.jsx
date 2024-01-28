import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Company from "./Pages/Company.jsx";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Employee from "./Pages/Employee.jsx";
import Project from "./Pages/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "Company",
    element: <Company/>,
  },

  {
    path: "Employee",
    element: <Employee/>,
  },

  {
    path: "Project",
    element: <Project/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
