import { createStore, combineReducers } from "redux"
import { getUserAuth } from "./reducers"

const reducers = combineReducers({
  userAuth: getUserAuth
})

const store = createStore(reducers)

export default store
