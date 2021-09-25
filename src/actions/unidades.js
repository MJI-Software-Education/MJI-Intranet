import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from "sweetalert2";

export const unitStartAddNew = ( idAsignatura, unidad ) => {
    return async ( dispatch ) => {
   
        try {

            const body = await fetchConToken('unidad', { idAsignatura, unidad }, 'POST');

            if ( body.ok ) {
            
                dispatch( unitAddNew( body.unidad ) );

            }

        } catch (error) {
            console.log(error)
        }
    }
}

const unitAddNew = (unit) => ({
    type: types.unitAddNew,
    payload: unit,
});

export const unitStartUpdate = ( unidad, _id, idAsignatura ) => {
    return async ( dispatch ) => {

        try {
            
            const body = await fetchConToken(`unidad/${ _id }`, { unidad, idAsignatura }, 'PUT');
            console.log(body)
            if ( body.ok ) {
                dispatch( unitUpdated( body.unidad ) );
            } else {
                Swal.fire('Error', body.msg,'error')
            } 

        } catch (error) {
            console.log(error);
        }

    }
}

const unitUpdated = (unidad) => ({
    type: types.unitUpdated,
    payload: unidad,
});

export const unitStartDelete = ( id ) => {
    return async ( dispatch ) => {

        try {
            
            const body = await fetchConToken(`unidad/${ id }`, {}, 'DELETE');
            
            if ( body.ok ) {
                
                dispatch( unitUpdated( body.unidad ) );
                
            } else {
                Swal.fire('Error', body.msg,'error')
            } 

        } catch (error) {
            console.log(error);
        }

    }
}

export const unitStartLoading = () => {
    return async (dispatch) => {

        try {
            
            const body = await fetchConToken('unidad');
            
            dispatch( unitLoaded( body.unidades ) );

        } catch (error) {
            console.log(error)
        }

    }
}

const unitLoaded = ( units ) => ({
    type: types.unitLoaded,
    payload: units
})