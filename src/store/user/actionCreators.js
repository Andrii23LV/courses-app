import { actionTypes } from './actionTypes';

export const signup = (signUpObject) => {
	return { type: actionTypes.SIGNUP, payload: signUpObject };
};

export const login = (loginObject) => {
	return { type: actionTypes.LOGIN, payload: loginObject };
};

export const logout = (token) => {
	return { type: actionTypes.LOGOUT, payload: token };
};

export const getUser = (token) => {
	return { type: actionTypes.GET_USER, payload: token };
};
