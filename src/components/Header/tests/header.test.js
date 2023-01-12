import { render, screen, within } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import * as Redux from 'react-redux';

jest.mock('react-redux');

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header', () => {
	beforeEach(() => {
		jest.spyOn(Redux, 'useSelector').mockReturnValue({
			userStore: { isAuth: true },
		});
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
	});

	test('Header has logo', () => {
		const appHeader = screen.getByTestId('header');
		const logoInHeader = within(appHeader).getAllByTestId('logo');
		expect(logoInHeader).toBeTruthy();
	});

	test('Header has name', () => {
		const appHeader = screen.getByTestId('header');
		const nameInHeader = within(appHeader).getAllByTestId('name');
		expect(nameInHeader).toBeTruthy();
	});
});
