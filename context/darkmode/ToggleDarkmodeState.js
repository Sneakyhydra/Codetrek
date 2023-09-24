'use client';

import { useReducer } from 'react';
import ToggleDarkmodeContext from './toggleDarkmodeContext';
import toggleDarkmodeReducer from './toggleDarkmodeReducer';
import { TOGGLE_DARKMODE_ON, TOGGLE_DARKMODE_OFF } from '../types';

const ToggleDarkmodeState = (props) => {
	// Set initial state
	const initialState = {
		darkmode: false,
	};

	// Init Reducer
	const [state, dispatch] = useReducer(toggleDarkmodeReducer, initialState);

	const turnDarkmodeOn = async () => {
		try {
			dispatch({
				type: TOGGLE_DARKMODE_ON,
			});
		} catch (err) {
			dispatch({
				type: TOGGLE_DARKMODE_OFF,
			});
		}
	};

	const turnDarkmodeOff = async () => {
		dispatch({
			type: TOGGLE_DARKMODE_OFF,
		});
	};

	const toggleDarkmode = async () => {
		try {
			const body = document.body;
			body.classList.toggle('dark-mode');
			const currMode = localStorage.getItem('dark-mode');
			if (currMode && (currMode === '0' || currMode === '1')) {
				if (currMode === '0') {
					localStorage.setItem('dark-mode', '1');
					dispatch({
						type: TOGGLE_DARKMODE_ON,
					});
				} else {
					localStorage.setItem('dark-mode', '0');
					dispatch({
						type: TOGGLE_DARKMODE_OFF,
					});
				}
			} else {
				localStorage.setItem('dark-mode', '1');
				dispatch({
					type: TOGGLE_DARKMODE_ON,
				});
			}
		} catch (err) {
			dispatch({
				type: TOGGLE_DARKMODE_OFF,
			});
		}
	};

	return (
		<ToggleDarkmodeContext.Provider
			value={{
				darkmode: state.darkmode,
				toggleDarkmode,
				turnDarkmodeOn,
				turnDarkmodeOff,
			}}
		>
			{props.children}
		</ToggleDarkmodeContext.Provider>
	);
};

export default ToggleDarkmodeState;
