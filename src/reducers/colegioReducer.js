const initialState = {
    checking:true,
    colegios:[]
}

export const colegioReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getColegios':
            return {
                ...state,
                checking:false,
                colegios:action.payload
            }
        case 'newColegio':
            return {
                ...state,
                colegios:[...state.colegios,action.payload]
            }
        case 'editColegio':
            return {
                ...state,
                colegios:state.colegios.map(c=>c.id === action.payload.id ? action.payload : c)
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}