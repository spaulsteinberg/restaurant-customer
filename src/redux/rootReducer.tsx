import { combineReducers } from "redux";
import menuReducer from "./menu/menuReducer";


const rootReducer = combineReducers({
    menu: menuReducer,
});

export default rootReducer;