/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [22/03/2022]
 * @updated: Angel Vazquez [08/04/2022]
 * @description: Archivo de importación de componentes y configuración de rutas.
 **/

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from '../../views/styles/App.theme';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';
import Login from '../../../Login/business/Login';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

const store = generateStore();

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                </Routes>
            </Router>
        </ThemeProvider>
    </Provider>
);

export default App;
