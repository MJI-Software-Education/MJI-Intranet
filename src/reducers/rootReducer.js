import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { usuariosReducer } from './usuariosReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    users:usuariosReducer
})