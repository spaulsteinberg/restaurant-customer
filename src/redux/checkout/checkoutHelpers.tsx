import axios from "axios";
import { ICustomerInfo } from "../../models/ICustomerInfo"
import { ICartState } from "../cart/cartReducer"
import store from "../store";

export const handlePayment = (token:string, email:string, amount:string) => {
    return axios.post(`${process.env.REACT_APP_ORDER_SPRING_SERVER}/payment/charge`, {
        stripeToken: token,
        stripeEmail: email,
        amount: (parseFloat(amount) * 100),
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const handleOrder = (custInfo:ICustomerInfo) => {
    const cart = store.getState().cart;
    return axios.post(`${process.env.REACT_APP_ORDER_SPRING_SERVER}/send/order`, {
        ...custInfo,
        date: null,
        totalCost: parseFloat(cart.cartValue.toFixed(2)),
        order: denormalizeOrder(cart)
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const denormalizeOrder = (cart:ICartState) => {
    let food:any[] = [];
    let drink:any[] = [];
    food = extractFoodArray(cart.foodIds, food, cart.order.food)
    drink = extractDrinkArray(cart.beverageIds, drink, cart.order.drink)
    return { food: food, drink: drink }
}

const extractFoodArray = (ids:string[], returnArray:any[], sourceArray:any) => {
    for (const id of ids) {
        const {item, description, type, price, ...rest} = sourceArray[id];
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