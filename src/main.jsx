import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h1>Kosong euy</h1>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <img className='flex justify-center items-center mx-auto my-[50vh]' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHVra2V3amkwbDhpc3NnaGMyZWh1N253YzhpZHh4a2VvbjlnMHBpNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gX3u0staej6wAnRlcP/giphy.gif" alt="error" />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
