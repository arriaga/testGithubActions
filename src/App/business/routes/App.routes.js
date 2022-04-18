/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [22/03/2022]
 * @updated: Angel Vazquez [08/04/2022]
 * @description: Archivo de importación de componentes y configuración de rutas.
 **/

import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from '../../views/styles/App.theme';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';
import Login from '../../../Login/business/Login';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import SafeComponent from '../../../Commons/utils/SafeComponent';

const store = generateStore();
const Users = lazy(() => import('users/Users'));

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <SafeComponent>
                <Suspense fallback={<div>Loading...</div>}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Login />}/>
                            <Route path="/users" element={<Users />}/>
                        </Routes>
                    </Router>
                </Suspense>
            </SafeComponent>
        </ThemeProvider>
    </Provider>
);

export default App;
