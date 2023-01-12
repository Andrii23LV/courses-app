import * as services from '../../services';
import * as actions from './actionCreators';

export const getAllCoursesServiceOperation = () => async (dispatch) => {
	const response = await services.getAllCoursesService();
	dispatch(actions.getAllCourses(response.data.result));
};

export const addCourseServiceOperation =
	(newCourseObject) => async (dispatch) => {
		const token = localStorage.getItem('token');
		const response = await services.addCourseService(newCourseObject, token);
		dispatch(actions.addCourse(response.data.result));
		dispatch(getAllCoursesServiceOperation());
	};

export const editCourseServiceOperation =
	(newCourseObject, id) => async (dispatch) => {
		const token = localStorage.getItem('token');
		const response = await services.editCourseService(
			newCourseObject,
			id,
			token
		);
		dispatch(actions.editCourse(response.data.result));
	};

export const deleteCourseServiceOperation = (id) => async (dispatch) => {
	const token = localStorage.getItem('token');
	await services.deleteCourseService(id, token);
	dispatch(actions.deleteCourse(id));
	dispatch(getAllCoursesServiceOperation());
};
