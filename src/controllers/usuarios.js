import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"


export const dispatchGetUsuarios = ()=>{
    return async(dispatch)=>{
        const resp =await fetchConToken('usuarios/');
        if(resp){
            dispatch(getUsuarios(resp.usuarios));
        }else{
            console.log('Error');
        }

    }
} 
export const dispatchNewUsuario = (usuario, email, password)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken('usuarios/',{usuario, email, password}, 'POST');
      
        if(resp){
            dispatch(newUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 
export const dispatchEditUsuario = (usuario, email,id)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken(`usuarios/${id}`,{usuario, email}, 'PUT');
       
        if(resp){
            dispatch(editUsuario(resp.usuario));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }

    }
} 
export const dispatchDeleteUsuario = (id)=>{
    return async(dispatch)=>{
        const resp =await fetchConToken(`usuarios/${id}`,{}, 'DELETE');
       
        if(resp){
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
