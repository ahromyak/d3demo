import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import switchview from './switch'

export default combineReducers({
    todos,
    visibilityFilter,
    switchview
})