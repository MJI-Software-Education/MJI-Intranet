
const initialState = {
    checking:true,
    asignaturas:[]
}

export const asignaturasReducer = (state=initialState,action)=>{
switch (action.type) {
    case 'getAsignaturas':
        return {
            ...state,
            checking:false,
            asignaturas:action.payload
        }
    case 'newAsignatura':
        return {
            ...state,
            asignaturas:[...state.asignaturas,action.payload]
        }
    case 'editAsignatura':
        return {
            ...state,
            asignaturas:state.asignaturas.map(a=>a.id === action.payload.id ? action.payload : a )
        }

    default:
        return state;
}
}