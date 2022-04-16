/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [22/03/2022]
 * @updated:
 * @description: Componente Login.
 **/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtainCredentials } from '../services/Login.ducks';
import { useNavigate } from 'react-router-dom';
import View from '../views/Login';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storeLogin = useSelector( (store) => store);

    const responseGoogle = (response) => {
        if(response.accessToken){
            dispatch(obtainCredentials(response.tokenObj));
            sessionStorage.setItem("userData", JSON.stringify(response.tokenObj));
            navigate('/users');
        }
    };

    return (
        <>
            <View 
                responseGoogle={responseGoogle}
            />
        </>
    );
};

export default Login;