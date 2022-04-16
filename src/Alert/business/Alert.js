/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar [25/03/2022]
 * @updated: 
 * @description: Componente Alert.
**/

import React from 'react';
import View from '../../Alert/views/Alert';

export const initialState = {
	severity: '',
	message: '',
	open: false,
	autoHideDuration: 3000,
	location: { vertical: 'bottom', horizontal: 'left' },
	elevation: 6
};

export const closeAlertAction = (
	alertOptions,
	setAlertOptions,
	action = null
) => {
	return setAlertOptions({
		...alertOptions,
		handleClose: () => actionComplete({ action, setAlertOptions, alertOptions })
	});
};

const actionComplete = ({ action, setAlertOptions, alertOptions }) => {
	setAlertOptions({
		...alertOptions,
		open: false
	});

	setTimeout(() => {
		setAlertOptions(initialState);
	}, 1000);

	if (action) {
		action();
	}
};

export default function Alert(props) {
	return <View {...props} />;
};