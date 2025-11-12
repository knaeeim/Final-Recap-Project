import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router'
import CartContextProvider from './Context/CartContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartContextProvider>
  </StrictMode>,
)
