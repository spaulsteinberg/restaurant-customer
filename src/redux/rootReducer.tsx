import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import checkoutReducer from "./checkout/checkoutReducer";
import menuReducer from "./menu/menuReducer";


const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    checkout: checkoutReducer
});

export default rootReducer;