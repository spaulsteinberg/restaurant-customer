import { DEC_CART_COUNT, INC_CART_COUNT } from "./cartTypes"


export const incrementCartCount = () => {
    return {
        type: INC_CART_COUNT
    }
}

export const decrementCartCount = () => {
    return {
        type: DEC_CART_COUNT
    }
}