import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import  myCreatedRoute from './Router/Route'


export const GlobalContext = createContext(null)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalContext.Provider>
      
    
  </React.StrictMode>,
)
