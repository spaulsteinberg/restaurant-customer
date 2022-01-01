import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import checkoutReducer from "./checkout/checkoutReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer
});

export default rootReducer;