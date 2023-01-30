import {useState} from 'react'
import Inicio from'./Inicio'
import Error from '../components/Error'
import {useNavigate } from 'react-router-dom'

const Login = () => {

  return (
    <div className=' p-4 flex-col w-full md:h-screen flex items-center md:flex-row md:px-10'>
        <div>
            <h1 className='text-7xl mb-10 text-center md:text-left font-black'>Carrito de <span className='text-white'>Compras</span></h1>
            <p className='w-full text-xl font-normal leading-10 md:w-1/2 mb-10 text-center md:text-left'>Acá podras encontrar todos los productos que siempre haz querido y aún no lo sabias encuentra promociones de todo tipo en articulos nunca antes vistos!</p>
        </div>
        <form className='flex flex-col bg-white p-12 md:w-1/3 md:h-1/1 mb-10 rounded-xl'>
            <input className='p-2 border-b-2 mb-6' type="text" id='nombre' placeholder='Nombre Completo'/>

            <select id="ciudad" className=' text-gray-400 p-2 border-b-2 mb-6'>
                <option value="" disabled>-- Selecciona tu Ubicación --</option>
                <option value="bogota">Bogotá, Colombia</option>
                <option value="medellin">Medellin, Colombia</option>
            </select>

            <input className='p-2 border-b-2 mb-6' type="email" id='correo' placeholder='Correo Electronico'/>
            <input type="submit" className='bg-green-400 p-2 rounded-md text-white font-bold my-8 uppercase' value="Ingresar" />
            <a href='#' className='text-center text-gray-400'>Ingresar como Administrador</a>
        </form>
    </div>
    
  )
}

export default Login