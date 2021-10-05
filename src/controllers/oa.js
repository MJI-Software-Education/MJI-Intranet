import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from "sweetalert2";

export const oaStartAddNew = ( idUnidad, oa, nivel ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('oa', { idUnidad, oa, nivel }, 'POST');

            if ( body.ok ) {
            
                dispatch( oaAddNew( body.oa ) );

            }

        } catch (error) {
            console.log(error)
        }
    }
}

const oaAddNew = ( oa ) => ({
    type: types.oaAddNew,
    payload: oa
});

export const oaStartUpdate = ( idUnidad, oa, nivel, id ) => {
    return async ( dispatch ) => {

        try {
            
            const body = await fetchConToken(`oa/${ id }`, { idUnidad, oa, nivel }, 'PUT');
            
            if ( body.ok ) {
                dispatch( oaUpdated( body.oa ) );
            } else {
                Swal.fire('Error', body.msg,'error')
            } 

        } catch (error) {
            console.log(error);
        }

    }
}

export const oaUpdated = ( oa ) => ({
    type: types.oaUpdated,
    payload: oa
});

export const oaStartDelete = ( id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`oa/${ id }`, {}, 'DELETE');
            
            if ( body.ok ) {
                
                dispatch( oaUpdated( body.oa ) );
                
            } else {
                Swal.fire('Error', body.msg,'error')
            } 

        } catch (error) {
            console.log(error);
        }
    }
}

export const oaStartLoading = () => {
    return async (dispatch) => {

        try {
            
            const body = await fetchConToken('oa/get',{},'POST');
            
            dispatch( oaLoaded( body.oas ) );

        } catch (error) {
            console.log(error)
        }

    }
}

const oaLoaded = ( oas ) => ({
    type: types.oaLoaded,
    payload: oas
})


