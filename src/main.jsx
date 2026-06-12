import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import HomePage from './pages/homePage/HomePage';
import TimeLine from './pages/timeLine/TimeLine';
import Stats from './pages/stats/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/timeline",
        element: <TimeLine />
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
