import { DEC_CART_COUNT, INC_CART_COUNT } from "./cartTypes";

const initialState = {
    count: 0
}

const cartReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case INC_CART_COUNT:
            return {...state, count: state.count + 1}
        case DEC_CART_COUNT:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}

export default cartReducer;