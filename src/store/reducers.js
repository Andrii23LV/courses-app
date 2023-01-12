import { combineReducers } from 'redux';

import { authorsStore } from './authors/reducer';
import { userStore } from './user/reducer';
import { coursesStore } from './courses/reducer';

export default combineReducers({
	authorsStore,
	userStore,
	coursesStore,
});
