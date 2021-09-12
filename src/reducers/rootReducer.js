import {combineReducers} from 'redux';
import { asignaturasReducer } from './asignaturasReducer';
import { authReducer } from "./authReducer";
import { unitReducer } from './unitReducer';
import { cursosReducer } from './cursosReducer';
import { usuariosReducer } from './usuariosReducer';
import { oaReducer } from './oaReducer';
import { colegioReducer } from './colegioReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    users:usuariosReducer,
    cursos: cursosReducer,
    asignaturas:asignaturasReducer,
    units:unitReducer,
    oas:oaReducer,
    colegios:colegioReducer
})