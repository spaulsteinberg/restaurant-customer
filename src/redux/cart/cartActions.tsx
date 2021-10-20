import { ICartActionPayload } from "../../models/CartActionPayload"
import { DEC_CART_COUNT, EMPTY_STATE, INC_CART_COUNT, INS_BEVERAGE, INS_FOOD, REM_BEVERAGE, REM_FOOD } from "./cartTypes"


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

export const removeFood = (payload:ICartActionPayload) => {
    return {
        type: REM_FOOD,
        payload: payload
    }
}

export const removeBeverage = (payload:ICartActionPayload) => {
    return {
        type: REM_BEVERAGE,
        payload: payload
    }
}

export const emptyState = () => {
    return {
        type: EMPTY_STATE
    }
}