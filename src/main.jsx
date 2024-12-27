import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Steganography from './COMPONENTS/PAGES/Steganography.jsx'
import About from './COMPONENTS/PAGES/About.jsx'
import Detail from './COMPONENTS/PAGES/Detail.jsx'
import Home from './COMPONENTS/PAGES/Home.jsx'
import Blockchain from './COMPONENTS/PAGES/Blockchain.jsx'
import Retrival from './COMPONENTS/PAGES/Retrival.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[{
      path:"/",
      element: <Home/>,
    },
      {
      path: "/Stegnography",
      element: <Steganography/>
    },
    {
      path: "/About",
      element: <About/>,
    },
    {
      path:"/Detail",
      element: <Detail/>,
    },
    {
      path: "/Blockchain",
      element: <Blockchain/>,
    },
    {
      path: "/Retrival",
      element: <Retrival/>,
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
