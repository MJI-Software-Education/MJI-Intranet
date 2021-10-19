const initialState = {
    checking:true,
    activos:[]
}

export const activosReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getActivos':
            return {
                ...state,
                checking:false,
                activos:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}