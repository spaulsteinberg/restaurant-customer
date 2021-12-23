import { db } from '../../firebase/firebase'
import { ICartItem } from '../../models/ICartItem';
import store from '../../redux/store'

// pass in sessionId, item to set, the ids for food or beverage, all the ids, is a new object, isFood as a flag
const addCartItem = (uniqueSessionId: string, item: ICartItem, isNew: boolean, isFood: boolean): Promise<string> => {
    const cartState = store.getState().cart;
    if (isFood) {
        return isNew ? addNewCartFood(uniqueSessionId, item, cartState.foodIds, cartState.allIds, cartState.count, cartState.cartValue)
            : addCartFood(uniqueSessionId, item, cartState.count, cartState.cartValue)
    }
    return isNew ? addNewCartBeverage(uniqueSessionId, item, cartState.beverageIds, cartState.allIds, cartState.count, cartState.cartValue)
        : addCartBeverage(uniqueSessionId, item, cartState.count, cartState.cartValue)
}

const addCartBeverage = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number): Promise<string> => {
    return db.collection("cart")
        .doc(uniqueSessionId)
        .update({
            [`cart.order.drink.${item.item}`]: item,
            [`cart.cartValue`]: oldValue + parseFloat(item.price),
            [`cart.count`]: count + 1
        })
        .then((res: any) => {
            return Promise.resolve("created")
        })
        .catch((err: any) => {
            console.log(err)
            return Promise.reject(err)
        })
}

const addNewCartBeverage = (uniqueSessionId: string, item: ICartItem, bevIds: string[], allIds: string[], count: number, oldValue: number): Promise<string> => {
    return db.collection("cart")
        .doc(uniqueSessionId)
        .update({
            [`cart.order.drink.${item.item}`]: item,
            [`cart.allIds`]: [...allIds, item.item],
            [`cart.beverageIds`]: [...bevIds, item.item],
            [`cart.cartValue`]: oldValue + parseFloat(item.price),
            [`cart.count`]: count + 1
        })
        .then(res => {
            return Promise.resolve("added")
        })
        .catch(err => {
            return Promise.reject(`${err}`)
        })
}

const addCartFood = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number): Promise<string> => {
    return db.collection("cart")
        .doc(uniqueSessionId)
        .update({
            [`cart.order.food.${item.item}`]: item,
            [`cart.cartValue`]: oldValue + parseFloat(item.price),
            [`cart.count`]: count + 1
        })
        .then((res: any) => {
            return Promise.resolve("created")
        })
        .catch((err: any) => {
            console.log(err)
            return Promise.reject(err)
        })
}

const addNewCartFood = (uniqueSessionId: string, item: ICartItem, foodIds: string[], allIds: string[], count: number, oldValue: number): Promise<string> => {
    return db.collection("cart")
        .doc(uniqueSessionId)
        .update({
            [`cart.order.food.${item.item}`]: item,
            [`cart.allIds`]: [...allIds, item.item],
            [`cart.foodIds`]: [...foodIds, item.item],
            [`cart.cartValue`]: oldValue + parseFloat(item.price),
            [`cart.count`]: count + 1
        })
        .then((res: any) => {
            return Promise.resolve("created")
        })
        .catch((err: any) => {
            console.log(err)
            return Promise.reject(err)
        })
}

export default addCartItem