import { ICartAction } from "../../models/CartActionPayload";
import { DEC_CART_COUNT, INC_CART_COUNT, INS_BEVERAGE, INS_FOOD } from "./cartTypes";


export interface ICartState {
    order: any;
    count:number;
    cartValue:number;
    foodIds: string[];
    beverageIds:string[];
    allIds:string[]
}

const initialState:ICartState = {
    order: { food: {}, drink: {}},
    count: 0,
    cartValue:0,
    foodIds: [],
    beverageIds: [],
    allIds: []
}

const insertItem = (array:string[], key:string):string[] => {
    let additionArray = [...array];
    additionArray.push(key);
    return additionArray;
}

const cartReducer = (state = initialState, action:ICartAction) => {
    switch(action.type) {
        case INC_CART_COUNT:
            return {...state, count: state.count + 1}
        case DEC_CART_COUNT:
            return {...state, count: state.count - 1}
        case INS_BEVERAGE:
            const beverageInCart = state.allIds.find(item => item.toLowerCase() === action.payload.name.toLowerCase())
            return {
                ...state,
                beverageIds: beverageInCart ? [...state.beverageIds] : insertItem(state.beverageIds, action.payload.name),
                allIds: beverageInCart ? [...state.allIds] : insertItem(state.allIds, action.payload.name),
                cartValue: state.cartValue + parseFloat(action.payload.data.price),
                order: {
                    drink: {
                        ...state.order.drink,
                        [action.payload.name]: {
                            ...action.payload.data,
                            quantity: action.payload.quantity
                        }
                    },
                    food: { ...state.order.food }
                }
            }
        case INS_FOOD:
            const foodInCart = state.allIds.find(item => item.toLowerCase() === action.payload.name.toLowerCase())
            return {
                ...state,
                foodIds: foodInCart ? [...state.foodIds] : insertItem(state.foodIds, action.payload.name),
                allIds: foodInCart ? [...state.allIds] : insertItem(state.allIds, action.payload.name),
                cartValue: state.cartValue + parseFloat(action.payload.data.price),
                order: {
                    drink: { ...state.order.drink },
                    food: {
                        ...state.order.food,
                        [action.payload.name]: { ...action.payload.data, quantity: action.payload.quantity }
                    }
                }
            }
        default:
            return state;
    }
}

export default cartReducer;