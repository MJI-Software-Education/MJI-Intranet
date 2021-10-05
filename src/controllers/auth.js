
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"


export const dispatchLogin = (email, password) => {
   
    return async(dispatch)=>{
        localStorage.setItem('conexion','MJIServer');
        const resp = await fetchSinToken('auth',{email, password},'POST');
        if(resp.ok){
            localStorage.setItem('token',resp.token);
            dispatch(login(resp.usuario));
           
        }else{
           
            Swal.fire('Error',resp.msg,'error');
        }
    } 
}
export const renew = () => {
    return async(dispatch)=>{
        const resp = await fetchConToken('auth/renew',{},'POST');

        if(resp.ok){
            localStorage.setItem('token',resp.token);
            dispatch(login(resp.usuario));
            
        }else{
            dispatch(endChecking());
        }
    } 
}
export const dispatchLogout = () => {
    return async(dispatch)=>{
        localStorage.removeItem('token');
        dispatch(logout());
    } 
}

const login = (usuario) => ({
    type:'login',
    payload:usuario
})
const endChecking = () => ({
    type:'endChecking',
})
const logout = () => ({
    type:'logout',
})