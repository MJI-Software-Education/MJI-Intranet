import { types } from '../types/types';

const initialState = {
    unidades: [],
};

export const unitReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {

        case types.unitAddNew:
            return {
                ...state,
                unidades: [
                    ...state.unidades,
                    action.payload,
                ]
            }

        case types.unitUpdated:
            return {
                ...state,
                unidades: state.unidades.map(
                    u => ( u._id === action.payload._id ) ? action.payload : u
                )
            }

        case types.unitLoaded:
            return {
                ...state,
                unidades: [ ...action.payload ]
            }

        default:
            return state;
    }

}
