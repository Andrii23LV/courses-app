import axios from 'axios';

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': '*',
	'Content-Type': 'application/json',
};

export const loginService = (loginObject) =>
	axios.post('http://localhost:4000/login', loginObject, { headers });

export const signUpService = (signUpObject) =>
	axios.post('http://localhost:4000/register', signUpObject, { headers });

export const logoutService = (token) =>
	axios.delete('http://localhost:4000/logout', {
		headers: { Authorization: token },
	});

export const getUserService = (token) =>
	axios.get('http://localhost:4000/users/me', {
		headers: { ...headers, Authorization: token },
	});

export const getAllCoursesService = () =>
	axios.get('http://localhost:4000/courses/all', { headers });

export const addCourseService = (newCourseObject, token) =>
	axios.post('http://localhost:4000/courses/add', newCourseObject, {
		headers: { ...headers, Authorization: token },
	});

export const editCourseService = (newCourseObject, id, token) =>
	axios.put(`http://localhost:4000/courses/${id}`, newCourseObject, {
		headers: { ...headers, Authorization: token },
	});

export const deleteCourseService = (id, token) =>
	axios.delete(`http://localhost:4000/courses/${id}`, {
		headers: { ...headers, Authorization: token },
	});

export const getAllAuthorsService = () =>
	axios.get('http://localhost:4000/authors/all', { headers });

export const addAuthorService = (newAuthor, token) =>
	axios.post('http://localhost:4000/authors/add', newAuthor, {
		headers: { ...headers, Authorization: token },
	});

export const deleteAuthorService = (id, token) =>
	axios.delete(`http://localhost:4000/authors/${id}`, {
		headers: { ...headers, Authorization: token },
	});
