export const dateGenerator = (date) => {
	const today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1;
	let dd = today.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	if (date) {
		return date.split('/').join('.');
	} else {
		return dd + '.' + mm + '.' + yyyy;
	}
};
