import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
	addCourseServiceOperation,
	editCourseServiceOperation,
} from '../../store/courses/thunks';
import {
	addAuthorServiceOperation,
	deleteAuthorServiceOperation,
	getAllAuthorsServiceOperation,
} from '../../store/authors/thunks';

import { authorsList } from '../../store/authors/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './CourseForm.module.scss';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import DurationInfo from './components/DurationInfo/DurationInfo';

const CourseForm = () => {
	const location = useLocation();

	const [title, setTitle] = useState(location.state.course?.title || '');
	const [description, setDescription] = useState(
		location.state.course?.description || ''
	);
	const [duration, setDuration] = useState(
		location.state.course?.duration || ''
	);
	const [newAuthor, setNewAuthor] = useState();
	const [addedAuthors, setAddedAuthors] = useState([]);

	const authors = useSelector(authorsList);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllAuthorsServiceOperation());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title || !description || !duration || addedAuthors.length === 0)
			return alert('Please, fill all fields!');

		const request = {
			title: title,
			description: description,
			duration: parseInt(duration),
			authors: addedAuthors.map((author) => author.id),
		};

		if (location.state.fetchType === 'add')
			dispatch(addCourseServiceOperation(request));
		if (location.state.fetchType === 'edit')
			dispatch(editCourseServiceOperation(request, location.state.course.id));
	};

	const handleAddAuthor = (e) => {
		e.preventDefault();
		dispatch(addAuthorServiceOperation({ name: newAuthor }));
	};

	const handleDeleteAuthor = (e, id) => {
		e.preventDefault();
		dispatch(deleteAuthorServiceOperation(id));
	};

	return (
		<form data-testid='course-form'>
			<div className={styles.block1}>
				<Input
					type='text'
					labelText={'Title'}
					value={title}
					placeholderText={'Enter title...'}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button
					buttonText={`${location.state.formType} course`}
					onClick={(e) => {
						handleSubmit(e);
					}}
				/>
			</div>
			<div className={styles.textareaContainer}>
				<label htmlFor='descrip'>Description</label>
				<textarea
					id='descrip'
					placeholder='Enter description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.detailsInputs}>
					<div className={styles.inputContainer}>
						<h3>Add author</h3>
						<Input
							labelText={'Author name'}
							placeholderText={'Enter author name...'}
							onChange={(e) => setNewAuthor(e.target.value)}
						/>
						<Button
							buttonText={'Create author'}
							onClick={(e) => handleAddAuthor(e)}
						/>
					</div>
					<div className={styles.inputContainer}>
						<h3>Duration</h3>
						<Input
							type='text'
							name='duration'
							onChange={(e) => setDuration(e.target.value.replace(/\D/g, ''))}
							value={duration}
							placeholderText={'Enter duration in minutes...'}
						/>
						<DurationInfo duration={duration} />
					</div>
				</div>
				<div className={styles.authorsContainer}>
					<h3>Authors</h3>
					<ul className={styles.authorsList}>
						{authors
							.filter((author) => !addedAuthors.includes(author))
							.map((author) => {
								return (
									<li key={author.id}>
										<p>{author.name}</p>
										<Button
											buttonText={'Add author'}
											onClick={() =>
												setAddedAuthors((currentArray) => [
													author,
													...currentArray,
												])
											}
										/>
										<Button
											icon={<FontAwesomeIcon icon={faTrash} />}
											onClick={(e) => handleDeleteAuthor(e, author.id)}
										/>
									</li>
								);
							})}
					</ul>
					<h3>Course authors</h3>
					<ul className={styles.authorsList}>
						{addedAuthors.length ? (
							addedAuthors.map((addedAuthor) => {
								return (
									<li key={addedAuthor.id}>
										<p>{addedAuthor.name}</p>
										<Button
											buttonText={'Delete author'}
											onClick={() => {
												setAddedAuthors((currentArray) =>
													currentArray.filter(
														(author) => author !== addedAuthor
													)
												);
											}}
										/>
									</li>
								);
							})
						) : (
							<li>Author list is empty</li>
						)}
					</ul>
				</div>
			</div>
		</form>
	);
};

export default CourseForm;
