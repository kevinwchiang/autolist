import { combineReducers } from 'redux'
import search from './search'

const autoStore = combineReducers({
  search,
})

export default autoStore;