import { mockedAuthorsList as authorsList } from '../constants';

export const authorNameById = (authors) => {
	let authorsName = [];
	authors.forEach((authorCourse) => {
		authorsList.forEach((authorAll) => {
			if (authorAll.id === authorCourse) {
				authorsName.push(authorAll.name);
			}
		});
	});
	return authorsName.join(', ');
};
