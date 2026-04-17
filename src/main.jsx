import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/routes.jsx'
import ConnectionProvider from './Context/ConnectionProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ConnectionProvider>
         <ToastContainer></ToastContainer>
         <RouterProvider router={router}></RouterProvider>
     </ConnectionProvider>
  </StrictMode>,
)
