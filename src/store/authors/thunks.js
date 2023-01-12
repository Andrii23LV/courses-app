import * as services from '../../services';
import * as actions from './actionCreators';

export const getAllAuthorsServiceOperation = () => async (dispatch) => {
	const response = await services.getAllAuthorsService();
	dispatch(actions.getAllAuthors(response));
};

export const addAuthorServiceOperation = (newAuthor) => async (dispatch) => {
	const token = localStorage.getItem('token');
	const response = await services.addAuthorService(newAuthor, token);
	dispatch(actions.addAuthor(response.data.result));
	dispatch(getAllAuthorsServiceOperation());
};

export const deleteAuthorServiceOperation = (id) => async (dispatch) => {
	const token = localStorage.getItem('token');
	await services.deleteAuthorService(id, token);
	dispatch(actions.deleteAuthor(id));
	dispatch(getAllAuthorsServiceOperation());
};
