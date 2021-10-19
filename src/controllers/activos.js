import { fetchConToken } from "../helpers/fetch";

export const dispatchGetColegiosActive =()=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('colegio/get',{},'POST');
        if(resp.ok){
            dispatch(getColegios(resp.colegios));
        }else{
            dispatch(endCheck())
        }
    }
}
const getColegios = (cursos) =>( {
    type:'getActivos',
    payload:cursos
});
const endCheck = () =>( {
    type:'endCheck',
});