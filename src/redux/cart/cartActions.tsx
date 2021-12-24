import { Dispatch } from "react"
import { db } from "../../firebase/firebase"
import { ICartActionPayload } from "../../models/CartActionPayload"
import { DEC_CART_COUNT, EMPTY_STATE, INC_CART_COUNT, INS_BEVERAGE, INS_FOOD, LOAD_INITIAL_STATE, LOAD_INITIAL_STATE_ERROR, LOAD_INITIAL_STATE_SUCCESS, REM_BEVERAGE, REM_FOOD } from "./cartTypes"


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

export const loadInitialState = () => {
    return {
        type: LOAD_INITIAL_STATE
    }
}

export const loadInitialStateSuccess = (payload:any) => {
    return {
        type: LOAD_INITIAL_STATE_SUCCESS,
        payload: payload
    }
}

export const loadInitialStateError = (payload:any) => {
    return {
        type: LOAD_INITIAL_STATE_ERROR,
        payload: payload
    }
}

export const loadInitalStateFromDB = (sessionId:string) => {
    return (dispatch:Dispatch<any>) => {
        dispatch(loadInitialState())
        return db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
            .doc(sessionId)
            .get()
            .then(res => {
                if (res && res.data()) dispatch(loadInitialStateSuccess(res.data()?.cart))
                else dispatch(loadInitialStateError("no data"))
            })
            .catch(err => {
                console.log(err)
                dispatch(loadInitialStateError(err))
            })
    }
}