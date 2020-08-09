import { combineReducers } from "redux"
import filtersReducer from "../features/filters/filtersSlice"

export default combineReducers({ filters: filtersReducer })
