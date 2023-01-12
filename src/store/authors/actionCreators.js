import { actionTypes } from './actionTypes';

export const getAllAuthors = (authors) => {
	return { type: actionTypes.GET_ALL_AUTHORS, payload: authors };
};

export const addAuthor = (newAuthor) => {
	return { type: actionTypes.ADD_AUTHOR, payload: newAuthor };
};

export const deleteAuthor = (index) => {
	return { type: actionTypes.DELETE_AUTHOR, payload: index };
};
