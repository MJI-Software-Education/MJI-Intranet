import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";


export const dispatchGetColegios =()=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('colegio/');
        if(resp.ok){
            dispatch(getColegios(resp.colegios));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchNewColegio =(rbd,nombre)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('colegio/',{rbd,nombre},'POST');

        if(resp.ok){
            dispatch(newColegio(resp.colegio));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatchEditColegio =(rbd,nombre,id)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`colegio/${id}`,{rbd,nombre},'PUT');
     
        if(resp.ok){
            dispatch(editColegio(resp.colegio));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatchDeleteColegio =(id)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`colegio/${id}`,{},'DELETE');

        if(resp.ok){
            dispatch(editColegio(resp.colegio));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}

const getColegios = (cursos) =>( {
    type:'getColegios',
    payload:cursos
});
const newColegio = (curso) =>( {
    type:'newColegio',
    payload:curso
});
const editColegio= (curso) =>( {
    type:'editColegio',
    payload:curso
});
const endCheck = () =>( {
    type:'endCheck',
});