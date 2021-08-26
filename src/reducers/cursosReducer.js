const initialState = {
    checking:true,
    cursos:[]
}

export const cursosReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getCursos':
            return {
                ...state,
                checking:false,
                cursos:action.payload
            }
        case 'newCurso':
            return {
                ...state,
                cursos:[...state.cursos,action.payload]
            }
        case 'editCurso':
            return {
                ...state,
                cursos:state.cursos.map(c=>c.id === action.payload.id ? action.payload : c)
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}