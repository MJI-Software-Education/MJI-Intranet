const initialState = {
    checking:false,
    usuarios:[]
}

export const usuariosReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'getUsuarios':
            return {
                ...state,
                usuarios:action.payload
            }
        case 'newUsuario':
            return {
                ...state,
                usuarios:[...state.usuarios,action.payload]
            }
        case 'editUsuario':
            return {
                ...state,
                usuarios:state.usuarios.map(u=>u._id === action.payload._id ? action.payload : u )
            }
        
    
        default:
            return state;
    }
}