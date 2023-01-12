import { actionTypes } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userStore = (state = userInitialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isAuth: true,
				token: action.payload.result,
			};

		case actionTypes.SIGNUP:
			return {
				...state,
			};

		case actionTypes.LOGOUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};

		case actionTypes.GET_USER:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				role: action.payload.role,
			};

		default:
			return state;
	}
};
