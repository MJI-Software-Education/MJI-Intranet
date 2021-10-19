import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"


export const dispatchGetUsuarios = (organizacion)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken('usuarios/get',{organizacion},'POST');
        if(resp.ok){
            dispatch(getUsuarios(resp.usuarios));
        }else{
            console.log(resp)
            console.log('Error');
        }

    }
} 
export const dispatchNewUsuario = (data)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken('usuarios/',data, 'POST');
        if(resp.ok){
            dispatch(newUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 
export const dispatchNewDocente = (data)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken('usuarios/addDocente',data, 'POST');
        if(resp.ok){
            dispatch(newUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 

export const dispatchEditUsuario = (data,id)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken(`usuarios/${id}`,data, 'PUT');
        if(resp.ok){
            dispatch(editUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 
export const dispatchDeleteUsuario = (id,organizacion)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken(`usuarios/${id}`,{organizacion}, 'DELETE');
       
        if(resp.ok){
            dispatch(editUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 


const getUsuarios = (usuarios) => ({
    type:'getUsuarios',
    payload:usuarios
})
const newUsuario = (usuario) => ({
    type:'newUsuario',
    payload:usuario
})
const editUsuario = (usuario) => ({
    type:'editUsuario',
    payload:usuario
})
