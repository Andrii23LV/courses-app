export const authorNameById = (authors, authorsListData) => {
	let authorsName = [];
	authors.forEach((authorCourse) => {
		authorsListData.forEach((authorAll) => {
			if (authorAll.id === authorCourse) {
				authorsName.push(authorAll.name);
			}
		});
	});
	return authorsName.join(', ');
};
