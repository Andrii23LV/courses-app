import * as services from '../../services';
import * as actions from './actionCreators';

export const signupServiceOperation = (signupObject) => async (dispatch) => {
	const response = await services.signUpService(signupObject);
	dispatch(actions.signup(response));
};

export const loginServiceOperation = (loginObject) => async (dispatch) => {
	const response = await services.loginService(loginObject);
	localStorage.setItem('token', response.data.result);
	dispatch(actions.login(response.data));
};

export const logoutServiceOperation = (token) => async (dispatch) => {
	const response = await services.logoutService(token);
	dispatch(actions.logout(response));
	localStorage.removeItem('token');
};

export const getUserServiceOperation = (token) => async (dispatch) => {
	const response = await services.getUserService(token);
	console.log(response);
	dispatch(actions.getUser(response.data.result));
};
