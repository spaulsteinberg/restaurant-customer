//import { ICartAction } from "../../models/CartActionPayload";
import { RESET_CHECKOUT_STATE, SEND_ORDER, SEND_ORDER_ERROR, SEND_ORDER_SUCCESS, SET_CHECKOUT_LOADING, SET_COMPLETED_STATUS } from "./checkoutTypes";

export interface ICheckoutState {
    loading:boolean;
    data:any;
    hasCompletedOrder:boolean;
    error:any;
}
const initialState:ICheckoutState = {
    loading: false,
    data: null,
    hasCompletedOrder: false,
    error: null
}

const checkoutReducer = (state = initialState, action: any /*ICartAction*/) => {
    switch (action.type) {
        case SEND_ORDER:
            return { ...state, loading: true, data: null, error: null }
        case SEND_ORDER_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null }
        case SEND_ORDER_ERROR:
            return { ...state, loading: false, data: null, error: action.payload }
        case SET_COMPLETED_STATUS:
            return { ...state, hasCompletedOrder: action.payload }
        case SET_CHECKOUT_LOADING:
            return {...state, loading: action.payload}
        case RESET_CHECKOUT_STATE:
            return initialState;
        default:
            return state;
    }
}

export default checkoutReducer;