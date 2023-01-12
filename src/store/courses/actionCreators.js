import { actionTypes } from './actionTypes';

export const getAllCourses = (courses) => {
	return { type: actionTypes.GET_COURSES, payload: courses };
};

export const addCourse = (newCourseObject) => {
	return { type: actionTypes.SAVE_COURSE, payload: newCourseObject };
};

export const editCourse = (newCourseObject) => {
	return { type: actionTypes.EDIT_COURSE, payload: newCourseObject };
};

export const deleteCourse = (id) => {
	return { type: actionTypes.DELETE_COURSE, payload: id };
};
