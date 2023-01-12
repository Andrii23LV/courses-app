import { actionTypes } from './actionTypes';

export const coursesInitialState = {
	courses: [],
};

export const coursesStore = (state = coursesInitialState, action) => {
	switch (action.type) {
		case actionTypes.GET_COURSES:
			return {
				...state,
				courses: action.payload,
			};

		case actionTypes.SAVE_COURSE:
			return { courses: [...state.courses, action.payload] };

		case actionTypes.EDIT_COURSE:
			return { courses: [...state.courses] };

		case actionTypes.DELETE_COURSE:
			return {
				courses: state.courses.filter((course) => course.id !== action.id),
			};
		default:
			return state;
	}
};
