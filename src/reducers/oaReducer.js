import { types } from '../types/types';

const initialState = {
    oas: [],
};

export const oaReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {

        case types.oaAddNew:
            return {
                ...state,
                oas: [
                    ...state.oas,
                    action.payload,
                ]
            }

        case types.oaUpdated:
            return {
                ...state,
                oas: state.oas.map(
                    oa => ( oa._id === action.payload._id ) ? action.payload : oa
                )
            }

        case types.oaDeleted:
            return {
                ...state,
                oas: [ ...action.payload ]
            }

        case types.oaLoaded:
            return {
                ...state,
                oas: [ ...action.payload ]
            }

        default:
            return state;
    }

}
