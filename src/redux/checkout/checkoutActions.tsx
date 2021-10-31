import { Dispatch } from "react"
import { ICustomerInfo } from "../../models/ICustomerInfo"
import { IOrderCreatedResponse } from "../../models/IOrderCreatedResponse"
import { ICartState } from "../cart/cartReducer"
import store from "../store"
import { SEND_ORDER, SEND_ORDER_ERROR, SEND_ORDER_SUCCESS } from "./checkoutTypes"


export const sendOrder = () => {
    return {
        type: SEND_ORDER
    }
}

export const sendOrderSuccess = (payload:IOrderCreatedResponse) => {
    return {
        type: SEND_ORDER_SUCCESS,
        payload: payload
    }
}

export const sendOrderError = (error:string) => {
    return {
        type: SEND_ORDER_ERROR,
        payload: error
    }
}

export const processCheckout = (custInfo:ICustomerInfo) => {
    return async (dispatch:Dispatch<any>) => {
        dispatch(sendOrder());
        const cart = store.getState().cart;
        fetch(`${process.env.REACT_APP_ORDER_SPRING_SERVER}/send/order`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...custInfo,
                date: null,
                totalCost: parseFloat(cart.cartValue.toFixed(2)),
                order: denormalizeOrder(cart)
            })
        })
        .then(res => res.json())
        .then((res:IOrderCreatedResponse) => {
            console.log(res)
            dispatch(sendOrderSuccess(res))
        })
        .catch(err => {
            console.log(err)
            dispatch(sendOrderError("An error occurred processing your order. Please try again."))
        })
    }
}


const denormalizeOrder = (cart:ICartState) => {
    let food:any[] = [];
    let drink:any[] = []
    console.log(cart)
    food = extractFoodArray(cart.foodIds, food, cart.order.food)
    drink = extractDrinkArray(cart.beverageIds, drink, cart.order.drink)
    return { food: food, drink: drink }
}

const extractFoodArray = (ids:string[], returnArray:any[], sourceArray:any) => {
    for (const id of ids) {
        const {item, description, type, price, ...rest} = sourceArray[id]; // TODO- not working
        const editedObj = {...rest, main: item, price: parseFloat(price)}
        returnArray.push(editedObj);
    }
    return returnArray
}
const extractDrinkArray = (ids:string[], returnArray:any[], sourceArray:any) => {
    for (const id of ids) {
        returnArray.push(sourceArray[id]);
    }
    return returnArray
}