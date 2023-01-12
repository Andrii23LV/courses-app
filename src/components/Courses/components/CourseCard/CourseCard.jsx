import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCourseServiceOperation } from '../../../../store/courses/thunks';
import { getAllAuthorsServiceOperation } from '../../../../store/authors/thunks';
import { role } from '../../../../store/user/selectors';
import { authorsList } from '../../../../store/authors/selectors';

import styles from './CourseCard.module.scss';
import Button from '../../../../common/Button/Button.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { authorNameById } from '../../../../helpers/authorNameById';

const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const userRole = useSelector(role);
	const authorsListData = useSelector(authorsList);

	const [isReadMore, setIsReadMore] = useState(true);

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllAuthorsServiceOperation());
	}, []);

	const handleDelete = () => {
		dispatch(deleteCourseServiceOperation(course.id));
	};

	return (
		<li className={styles.card}>
			<div className={styles.description}>
				<h2>{course.title}</h2>
				<p>
					{isReadMore ? course.description.slice(0, 170) : course.description}
					{course.description.length > 170 ? (
						<span onClick={toggleReadMore} className={styles.readOrHide}>
							{isReadMore ? '...read more' : ' show less'}
						</span>
					) : (
						<></>
					)}
				</p>
			</div>
			<div className={styles.details}>
				<p>
					<span className={styles.label}>Authors:</span>
					{authorNameById(course.authors, authorsListData)}
				</p>
				<p>
					<span className={styles.label}>Duration:</span>
					{pipeDuration(course.duration)} hours
				</p>
				<p>
					<span className={styles.label}>Created:</span>
					{dateGenerator(course.creationDate)}
				</p>

				<div className={styles.buttonGroup}>
					<Button
						buttonText={'Show courses'}
						className={styles.button}
						onClick={() => navigate(`/courses/${course.id}`, { state: course })}
					/>
					{userRole === 'admin' && (
						<>
							<Button
								icon={<FontAwesomeIcon icon={faPen} />}
								className={styles.button}
								onClick={() =>
									navigate(`/courses/update/${course.id}`, {
										state: {
											formType: 'Update',
											course: course,
											fetchType: 'edit',
										},
									})
								}
							/>
							<Button
								className={styles.button}
								onClick={handleDelete}
								icon={<FontAwesomeIcon icon={faTrash} />}
							/>
						</>
					)}
				</div>
			</div>
		</li>
	);
};

export default CourseCard;
