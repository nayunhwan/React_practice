/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import { combineReducers } from 'redux';
import todos from './toods';
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({todos, visibilityFilter})

export default reducer;
