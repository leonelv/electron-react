import { combineReducers } from 'redux'
import manifestReducer from './manifestReducer'

export default combineReducers({
	manifest: manifestReducer
})
