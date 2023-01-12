import reducer from '../reducers';

const initialState = {
	authorsStore: {
		authors: [],
	},
	userStore: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
	coursesStore: {
		courses: [],
	},
};

describe('Reducer testing', () => {
	test('Should return the initial state', () => {
		expect(reducer(undefined, { type: undefined })).toEqual(initialState);
	});

	test('Reducer should handle SAVE_COURSE and returns new state', () => {
		expect(reducer(undefined, { type: 'SAVE_COURSE' })).not.toEqual(
			initialState
		);
	});

	test('Reducer should handle GET_COURSES and returns new state', () => {
		expect(reducer(undefined, { type: 'GET_COURSES' })).not.toEqual(
			initialState
		);
	});
});
