export const pipeDuration = (duration) => {
	let hours = Math.floor(duration / 60);
	if (hours < 10) hours = '0' + hours;
	let minutes = duration - hours * 60;
	if (minutes < 10) minutes = '0' + minutes;
	return hours + ':' + minutes;
};
