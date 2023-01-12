import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import CourseForm from '../CourseForm';
import { BrowserRouter } from 'react-router-dom';

const useAppDispatch = () => useDispatch();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		state: {
			course: {
				title: 'Javascript',
				description:
					'You interact with JavaScript code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.',
				duration: 120,
				authors: [
					'5e0b0f18-32c9-4933-b142-50459b47f09e',
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
				],
				creationDate: '31/12/2022',
				id: 'ade2c457-3462-4b85-9a2c-a0607bfff4d8',
			},
		},
	}),
}));

jest.mock('react-redux');

describe('CourseForm', () => {
	test('Create author click button should call dispatch', () => {
		useSelector.mockReturnValue([]);
		useDispatch.mockReturnValue(jest.fn());

		render(
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		);
		const btn = screen.getByText('Create author');
		userEvent.click(btn);
		expect(
			useAppDispatch({
				type: 'ADD_AUTHOR',
				name: 'Dima',
			})
		).toHaveBeenCalled();
	});

	// test('Add author button click should add an author to course authors list.', () => {
	// 	useSelector.mockReturnValue([]);
	// 	useDispatch.mockReturnValue(jest.fn());

	// 	const wrapper = render(
	// 		<BrowserRouter>
	// 			<CourseForm />
	// 		</BrowserRouter>
	// 	);
	// 	const btn = screen.getByText('Add author');
	// 	userEvent.click(btn);
	// });
});
