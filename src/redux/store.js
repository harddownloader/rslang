import { createStore, combineReducers } from "redux"
import { getUserAuth } from "./reducers"

const reducers = combineReducers({
  auth: getUserAuth
})

const store = createStore(reducers)

export default store
