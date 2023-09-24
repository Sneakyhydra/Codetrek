import { TOGGLE_DARKMODE_ON, TOGGLE_DARKMODE_OFF } from '../types';

const toggleDarkmodeReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_DARKMODE_ON:
			return {
				...state,
				darkmode: true,
			};

		case TOGGLE_DARKMODE_OFF:
			return {
				...state,
				darkmode: false,
			};

		default:
			return state;
	}
};

export default toggleDarkmodeReducer;
