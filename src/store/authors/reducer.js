import { actionTypes } from './actionTypes';

export const authorsInitialState = {
	authors: [],
};

export const authorsStore = (state = authorsInitialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_AUTHORS:
			return {
				...state,
				authors: action.payload.data.result,
			};

		case actionTypes.ADD_AUTHOR:
			return { authors: [...state.authors, action.payload] };

		case actionTypes.DELETE_AUTHOR:
			return {
				authors: state.authors.filter((author) => author.id !== action.id),
			};
		default:
			return state;
	}
};
