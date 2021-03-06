import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"


export const dispatchGetAsignaturas =()=>{
    return async(dispatch)=>{
        const resp = await fetchConToken('asignatura/');
        if(resp.ok){
            dispatch(getAsignaturas(resp.asignaturas));
        }else{
            dispatch(endCheck());
        }
    }
}
export const dispatchNewAsignatura =(idCurso,asignatura)=>{
    return async(dispatch)=>{
        const resp = await fetchConToken('asignatura/',{idCurso, asignatura},'POST');
      
        if(resp.ok){
            dispatch(newAsignatura(resp.asignatura));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatchEditAsignatura =(idCurso,asignatura,id)=>{
    return async(dispatch)=>{
        const resp = await fetchConToken(`asignatura/${id}`,{idCurso, asignatura},'PUT');
        if(resp.ok){
            dispatch(editAsignatura(resp.asignatura));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}
export const dispatcDeleteAsignatura =(id)=>{
    return async(dispatch)=>{
        const resp = await fetchConToken(`asignatura/${id}`,{},'DELETE');
        if(resp.ok){
            dispatch(editAsignatura(resp.asignatura));
        }else{
            Swal.fire('Error',resp.msg,'error');
        }
    }
}


const getAsignaturas = (asignaturas)=>({
    type:'getAsignaturas',
    payload:asignaturas
})
const newAsignatura = (asignatura)=>({
    type:'newAsignatura',
    payload:asignatura
})
const editAsignatura = (asignatura)=>({
    type:'editAsignatura',
    payload:asignatura
})
const endCheck = ()=>({
    type:'endCheck',
})