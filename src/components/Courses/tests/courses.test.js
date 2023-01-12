import * as reactRedux from 'react-redux';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Courses from '../Courses';

const mockedState = {
	userStore: {
		isAuth: true,
		name: 'Test Name',
		role: 'admin',
	},
	coursesStore: {
		courses: [
			{
				title: 'JavaScript',
				description:
					'You interact with JavaScript code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.',
				duration: 220,
				authors: [
					'1c972c52-3198-4098-b6f7-799b45903199',
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				],
				creationDate: '31/12/2022',
				id: 'ade2c457-3462-4b85-9a2c-a0607bfff4d8',
			},
			{
				title: 'JAVA',
				description:
					'You interact with Java code all the time — you just might realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.',
				duration: 365,
				authors: [
					'9987de6a-b475-484a-b885-622b8fb88bda',
					'3e9b8a92-bbf9-47fc-94fa-a25188ff5def',
				],
				creationDate: '31/12/2022',
				id: 'c1a45827-969f-4ba6-99da-aaebc0025f9b',
			},
			{
				title: 'BackEnd',
				description:
					'You interact with .NET code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.',
				duration: 123,
				authors: [
					'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
					'1c972c52-3198-4098-b6f7-799b45903199',
				],
				creationDate: '31/12/2022',
				id: 'f6a95c39-6d13-4683-8be6-b000069b4278',
			},
			{
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
			},
		],
	},
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

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

describe('Courses', () => {
	test('Courses should display amount of CourseCard equal length of courses array', () => {
		const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
		useSelectorMock.mockClear();
		useSelectorMock.mockReturnValue(mockedState.coursesStore.courses);
		let { container } = render(
			<BrowserRouter>
				<reactRedux.Provider store={mockedStore}>
					<Courses />
				</reactRedux.Provider>
			</BrowserRouter>
		);
		let li = container.querySelectorAll('li');
		expect(li.length).toBe(mockedState.coursesStore.courses.length);
	});

	test('Courses should display Empty container if courses array length is 0', () => {
		const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
		useSelectorMock.mockClear();
		useSelectorMock.mockReturnValue([]); //set an empty array of courses
		let { container } = render(
			<BrowserRouter>
				<reactRedux.Provider store={mockedStore}>
					<Courses />
				</reactRedux.Provider>
			</BrowserRouter>
		);
		let li = container.querySelectorAll('li');
		expect(li.length).toBe(0);
	});

	// test('CourseForm should be showed after a click on a button "Add new course"', () => {
	// 	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	// 	useSelectorMock.mockClear();
	// 	useSelectorMock.mockReturnValueOnce(mockedState.coursesStore.courses);

	// 	render(
	// 		<BrowserRouter>
	// 			<reactRedux.Provider store={mockedStore}>
	// 				<Courses />
	// 			</reactRedux.Provider>
	// 		</BrowserRouter>
	// 	);

	// 	const btn = screen.getByText('Add new course');
	// 	fireEvent.click(btn);

	// 	expect(screen.getByTestId('course-form')).toBeInTheDocument();
	// });
});
