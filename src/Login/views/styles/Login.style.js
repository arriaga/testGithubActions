/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [23/03/2022]
 * @updated: -
 * @description: Estilos del componente Users.
 **/

 import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles(() => ({
    mt3: {
        marginTop: '3rem !important'
	},
    paperContainer: {
		minHeight: 200,
		boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
		paddingBottom: 10,
        textAlign: 'center'
	},
    title: {
		fontWeight: 'bold !important',
		padding: '10px 20px'
	}
 }));

 export default useStyles;