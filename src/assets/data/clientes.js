export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES,{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES)
    const resultado = await respuesta.json()
    return resultado
}