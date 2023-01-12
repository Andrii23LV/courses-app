import { pipeDuration } from '../../../../helpers/pipeDuration';

import styles from './DurationInfo.module.scss';

const DurationInfo = ({ duration }) => {
	return (
		<p className={styles.duration}>
			Duration: <span>{duration ? pipeDuration(duration) : '00:00'}</span> hours
		</p>
	);
};

export default DurationInfo;
