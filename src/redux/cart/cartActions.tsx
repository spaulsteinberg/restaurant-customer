import { ICartActionPayload } from "../../models/CartActionPayload"
import { DEC_CART_COUNT, INC_CART_COUNT, INS_BEVERAGE, INS_FOOD } from "./cartTypes"


export const incrementCartCount = () => {
    return {
        type: INC_CART_COUNT,
    }
}

export const decrementCartCount = () => {
    return {
        type: DEC_CART_COUNT
    }
}

export const insertFood = (payload:ICartActionPayload) => {
    return {
        type: INS_FOOD,
        payload: payload
    }
}

export const insertBeverage = (payload:ICartActionPayload) => {
    return {
        type: INS_BEVERAGE,
        payload: payload
    }
}