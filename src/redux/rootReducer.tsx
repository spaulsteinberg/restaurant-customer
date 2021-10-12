import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import menuReducer from "./menu/menuReducer";


const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
});

export default rootReducer;