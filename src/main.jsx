import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Index from "./pages/Index"
import Home, { loader as listDentist } from "./pages/Home"
import Contact from "./pages/Contact"
import DentistSelected, { loader as dentist } from "./pages/DentistSelected"
import Favs from "./pages/Favs"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/home",
        element: <Home />,
        loader: listDentist
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/favs",
        element: <Favs />
      },
      {
        path: "home/dentist/:id",
        element: <DentistSelected />,
        loader: dentist
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
