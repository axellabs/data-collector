import { combineReducers, createStore } from "redux";
import studentReducer from './students'
import gradeReducer from './grades'

const reducer = combineReducers({studentReducer, gradeReducer})

export default createStore(reducer)
