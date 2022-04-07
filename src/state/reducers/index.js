import { combineReducers } from "redux";
import rrReducer from "./rrReducer";

const reducers = combineReducers({
    rr : rrReducer
})

export default reducers