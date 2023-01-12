import { render, screen } from '@testing-library/react';
import { pipeDuration } from '../../../../../helpers/pipeDuration';
import { authorNameById } from '../../../../../helpers/authorNameById';
import * as reactRedux from 'react-redux';
import CourseCard from '../CourseCard';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { dateGenerator } from '../../../../../helpers/dateGenerator';

const mockedState = {
	userStore: {
		isAuth: true,
		name: 'Test Name',
		role: 'admin',
	},
	coursesStore: { courses: [] },
	authorsStore: {
		authors: [
			{
				name: 'author',
				id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
			},
			{
				name: 'author2',
				id: '1c972c52-3198-4098-b6f7-799b45903199',
			},
			{
				name: 'author3',
				id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
			},
			{
				name: 'author4',
				id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
			},
			{
				name: 'author5',
				id: '5e0b0f18-32c9-4933-b142-50459b47f09e',
			},
			{
				name: 'author6',
				id: '9987de6a-b475-484a-b885-622b8fb88bda',
			},
		],
	},
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const course = {
	title: '.BET',
	description:
		'You interact with Java code all the time — you just might realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.',
	duration: 213,
	authors: [
		'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
		'1c972c52-3198-4098-b6f7-799b45903199',
	],
	creationDate: '03/01/2023',
	id: '6c6bf883-75a2-47fe-8260-8c87b8441f27',
};

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('axios', () => {
	return Object.assign(jest.fn(), {
		get: jest.fn(),
		post: jest.fn(),
	});
});

describe('CourseForm', () => {
	const { title, description, duration, authors } = course;

	beforeEach(() => {
		const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
		useSelectorMock.mockClear();
		useSelectorMock.mockReturnValue(mockedState.authorsStore.authors);
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<CourseCard course={course} />
				</Provider>
			</BrowserRouter>
		);
	});

	test('CourseCard should display title', async () => {
		expect(screen.getByText(title)).toBeInTheDocument();
	});

	test('CourseCard should display description', () => {
		expect(screen.getByText(description.slice(0, 170))).toBeInTheDocument();
	});

	test('CourseCard should display duration in the correct format', () => {
		expect(pipeDuration(duration)).toBe('03:33');
	});

	test('CourseCard should display authors list', () => {
		expect(
			screen.getByText(
				authorNameById(authors, mockedState.authorsStore.authors)
			)
		).toBeInTheDocument();
	});

	test('CourseCard should display created date in the correct format', () => {
		expect(dateGenerator('03/01/2023')).toBe('03.01.2023');
	});
});
