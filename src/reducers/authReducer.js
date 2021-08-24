const initialState = {
    checking:true
}

export const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'login':
            return {
                ...state,
                checking:false,
                ...action.payload
            };
        case 'logout':
            return {
                checking:false,
            };
            
        case 'endChecking':
            return {
                checking:false,
            };
            
    
        default:
           return state;
    }
}