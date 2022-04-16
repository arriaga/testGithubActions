/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [18/03/2022]
 * @updated: Angel Vazquez [08/04/2022]
 * @description: Configuración del store de redux.
 **/

 import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
 import LoginReducer from '../../../Login/services/Login.ducks';
 import thunk from 'redux-thunk';

 const rootReducer = combineReducers({ login: LoginReducer });
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 export default function generateStore() {
     return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
 }