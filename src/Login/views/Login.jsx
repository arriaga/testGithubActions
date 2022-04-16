/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [22/03/2022]
 * @updated:
 * @description: Vista del componente Login.
 **/

 import React from 'react';
 import { GoogleLogin } from 'react-google-login';
 import Header from '../../Header/views/Header';
 import Footer from '../../Footer/views/Footer';
 import useStyles from './styles/Login.style';
 import { 
    Grid, 
    Typography,
    CardContent,
    Paper,
    Divider
} from '@mui/material';

 const View = (props) => {
    const { responseGoogle } = props;
    const { mt3, paperContainer, title } = useStyles();

    return (
        <>
            <Header/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} lg={4}/>
                    <Grid item xs={12} sm={6} lg={4} className={mt3}>
                        <Paper className={paperContainer}>
                            <Typography variant='subtitle1' className={title}>
                                Iniciar sesión
                            </Typography>
                            <Divider />
                            <GoogleLogin
                                clientId="411127351861-jn1cqnqgkqrqrmll2pn7nqdiq82r6hic.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className={mt3}
                            />    
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={4} />
                </Grid>      
            </CardContent>
            <Footer/>
        </>
    );
};

 export default View;