import {combineReducers} from 'redux';
import { asignaturasReducer } from './asignaturasReducer';
import { authReducer } from "./authReducer";
import { cursosReducer } from './cursosReducer';
import { usuariosReducer } from './usuariosReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    users:usuariosReducer,
    cursos: cursosReducer,
    asignaturas:asignaturasReducer
})