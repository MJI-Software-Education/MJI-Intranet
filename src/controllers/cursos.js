import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";


export const dispatchGetCursos =()=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('curso/');
        if(resp.ok){
            dispatch(getCursos(resp.cursos));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchNewCurso =(letra,curso)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('curso/',{letra,curso},'POST');

        if(resp.ok){
            dispatch(newCurso(resp.curso));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatchEditCurso =(letra,curso,id)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`curso/${id}`,{letra,curso},'PUT');
     
        if(resp.ok){
            dispatch(editCurso(resp.curso));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatchDeleteCurso =(id)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`curso/${id}`,{},'DELETE');

        if(resp.ok){
            dispatch(editCurso(resp.curso));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}

const getCursos = (cursos) =>( {
    type:'getCursos',
    payload:cursos
});
const newCurso = (curso) =>( {
    type:'newCurso',
    payload:curso
});
const editCurso = (curso) =>( {
    type:'editCurso',
    payload:curso
});
const endCheck = () =>( {
    type:'endCheck',
});