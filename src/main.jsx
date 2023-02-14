import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login, {action as loginAction} from './assets/pages/Login'
import Inicio from './assets/pages/Inicio'
import AdminInicio from './assets/pages/AdminInicio'
import AdminProductosNuevo from './assets/pages/AdminProductosNuevo'
import AdminProductosEditar from './assets/pages/AdminProductosEditar'

/* actions */


const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>,
    index:true,
    action:loginAction
  },
  {
    path:'/Inicio',
    element: <Inicio/>,
  },
  {
    path:'/Admin',
    element: <AdminInicio/>,
    children:[
        {
          path:'/Admin/nuevo',
          element:<AdminProductosNuevo/>
        },
        {
          path:'/Admin/:productoId/editar',
          element:<AdminProductosEditar/>
        },
        {
          path:'/Admin/:productoId/eliminar',
        }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
        router={router}
    />
  </React.StrictMode>,
)
