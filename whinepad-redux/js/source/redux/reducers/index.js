import { combineReducers } from 'redux'
import crud from './crud'

const whinepadApp = combineReducers({
  crud,
})

export default whinepadApp
