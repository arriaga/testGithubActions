/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [25/03/2022]
 * @updated: 
 * @description: Vista del componente Alert.
**/

import React, { forwardRef } from 'react';
import MuiAlert from '@mui/lab/Alert';
import { Snackbar } from '@mui/material';

const AlertBox = forwardRef((props, ref) => {
    return <MuiAlert elevation={props.elevation} ref={ref} variant='filled' {...props} />;
});

export default function Alert({alertOptions}) {
    const { 
        severity, 
        message, 
        open, 
        autoHideDuration, 
        location, 
        elevation, 
        handleClose 
    } = alertOptions;
    
    return (
        <Snackbar
            anchorOrigin={location}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}>
            <AlertBox severity={severity} elevation={elevation} onClose={handleClose}>
                {message}
            </AlertBox>
        </Snackbar>
    )
}