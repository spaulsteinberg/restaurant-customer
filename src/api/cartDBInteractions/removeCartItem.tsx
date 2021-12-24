import firebase from 'firebase/compat/app';
import { db } from "../../firebase/firebase";
import { ICartItem } from "../../models/ICartItem";
import store from "../../redux/store";

const removeCartItem = (uniqueSessionId: string, item: ICartItem, countIsZero: boolean, isFood: boolean): Promise<string> => {
    console.log(item, countIsZero, isFood)
    const cartState = store.getState().cart;
    if (isFood){
        return countIsZero ? removeCartFoodFromOrder(uniqueSessionId, item, cartState.count, cartState.cartValue, cartState.foodIds, cartState.allIds)
            : removeCartFood(uniqueSessionId, item, cartState.count, cartState.cartValue)
    }
    return countIsZero ? removeCartBeverageFromOrder(uniqueSessionId, item, cartState.count, cartState.cartValue, cartState.beverageIds, cartState.allIds)
            : removeCartBeverage(uniqueSessionId, item, cartState.count, cartState.cartValue)
}

const removeCartBeverage = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number): Promise<string> => {
    return db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
        .doc(uniqueSessionId)
        .update({
            [`cart.order.drink.${item.item}`]: item,
            [`cart.cartValue`]: oldValue - parseFloat(item.price),
            [`cart.count`]: count - 1
        })
        .then(res => {
            return Promise.resolve("removed")
        })
        .catch(err => {
            return Promise.reject(`${err}`)
        })
}

const removeCartBeverageFromOrder = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number, bevIds:string[], allIds:string[]): Promise<string> => {
    const splicedBeverageIds = bevIds.filter(bid => bid !== item.item);
    const splicedIds = allIds.filter(id => id !== item.item)
    console.log(splicedIds, splicedBeverageIds)
    return db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
        .doc(uniqueSessionId)
        .update({
            [`cart.order.drink.${item.item}`]: firebase.firestore.FieldValue.delete(),
            "cart.cartValue": oldValue - parseFloat(item.price),
            "cart.count": count - 1,
            "cart.beverageIds": splicedBeverageIds,
            "cart.allIds": splicedIds
        })
        .then(res => {
            return Promise.resolve("removed")
        })
        .catch(err => {
            return Promise.reject(`${err}`)
        })
}

const removeCartFood = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number): Promise<string> => {
    return db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
        .doc(uniqueSessionId)
        .update({
            [`cart.order.food.${item.item}`]: item,
            [`cart.cartValue`]: oldValue - parseFloat(item.price),
            [`cart.count`]: count - 1
        })
        .then(res => {
            return Promise.resolve("removed")
        })
        .catch(err => {
            return Promise.reject(`${err}`)
        })
}

const removeCartFoodFromOrder = (uniqueSessionId: string, item: ICartItem, count: number, oldValue: number, foodIds:string[], allIds:string[]): Promise<string> => {
    const splicedFoodIds = foodIds.filter(fid => fid !== item.item);
    const splicedIds = allIds.filter(id => id !== item.item)
    console.log(splicedIds, splicedFoodIds)
    return db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
        .doc(uniqueSessionId)
        .update({
            [`cart.order.food.${item.item}`]: firebase.firestore.FieldValue.delete(),
            "cart.cartValue": oldValue - parseFloat(item.price),
            "cart.count": count - 1,
            "cart.foodIds": splicedFoodIds,
            "cart.allIds": splicedIds
        })
        .then(res => {
            return Promise.resolve("removed")
        })
        .catch(err => {
            return Promise.reject(`${err}`)
        })
}

export default removeCartItem;