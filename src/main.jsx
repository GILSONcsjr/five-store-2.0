import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import Home from './pages/Home/index.jsx'
import Contact from './pages/Contact/index.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'
import Products from './pages/Products/index.jsx'
import About from './pages/About/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />
  },
  {
    path: "/erro",
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
