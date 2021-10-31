import { ICartAction } from "../../models/CartActionPayload";
import { SEND_ORDER, SEND_ORDER_ERROR, SEND_ORDER_SUCCESS } from "./checkoutTypes";


const initialState = {
    loading:false,
    data:null,
    error:null
}

const checkoutReducer = (state = initialState, action:ICartAction) => {
    switch(action.type){
        case SEND_ORDER:
            return {...state, loading: true, data: null, error: null}
        case SEND_ORDER_SUCCESS:
            return {...state, loading: false, data: action.payload, error: null}
        case SEND_ORDER_ERROR:
            return {...state, loading: false, data: null, error: action.payload}
        default:
            return state;
    }
}

export default checkoutReducer;