export async function obtenerArticulos(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL_ARTICULOS)
    const resultado = await respuesta.json()
    return resultado;
}


export async function obtenerArticulo(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_ARTICULOS}/${id}`)
    const resultado = await respuesta.json()
    return resultado;
}

export async function agregarArticulo(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL_ARTICULOS,{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarArticulo(id,datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_ARTICULOS}/${id}`,{
            method:'PUT',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarArticulo(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_ARTICULOS}/${id}`,{
            method:'DELETE',
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}