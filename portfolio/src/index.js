import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Portfolio from "./Routes/Portfolio";
import Resume from "./Routes/Resume";
import Root from "./Routes/Root";
import React from 'react';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "portfolio",
        element: <Portfolio />
       
      },
      {
        path: "resume",
        element: <Resume />
       
      },
      {
        path: "contact",
        element: <Contact />
       
      }
    ]
  }
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

