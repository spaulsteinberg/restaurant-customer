import { ICartAction } from "../../models/CartActionPayload";
import { DEC_CART_COUNT, EMPTY_STATE, INC_CART_COUNT, INS_BEVERAGE, INS_FOOD, LOAD_INITIAL_STATE, LOAD_INITIAL_STATE_ERROR, LOAD_INITIAL_STATE_SUCCESS, REM_BEVERAGE, REM_FOOD } from "./cartTypes";


export interface ICartState {
    order: any;
    count:number;
    cartValue:number;
    foodIds: string[];
    beverageIds:string[];
    allIds:string[],
    loading?:boolean
}

const initialState:ICartState = {
    order: { food: {}, drink: {}},
    count: 0,
    cartValue:0,
    foodIds: [],
    beverageIds: [],
    allIds: [],
    loading: true
}

const insertItem = (array:string[], key:string):string[] => [...array, key];

const removeItem = (array:string[], key:string):string[] => [...array].filter(a => a !== key)

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
        case REM_FOOD:
            if (state.order.food[action.payload.name].quantity > 1){
                return {
                    ...state,
                    beverageIds: [...state.beverageIds],
                    foodIds: [...state.foodIds],
                    allIds: [...state.allIds],
                    cartValue: state.cartValue - parseFloat(action.payload.data.price),
                    order: {
                        drink: {...state.order.drink },
                        food: {
                            ...state.order.food,
                            [action.payload.name]: { ...action.payload.data, quantity: action.payload.quantity }
                        }
                    }
                }
            }
            let stateCopy = {
                ...state,
                beverageIds: [...state.beverageIds],
                foodIds: removeItem(state.foodIds, action.payload.name),
                allIds: removeItem(state.allIds, action.payload.name),
                cartValue: state.cartValue - parseFloat(action.payload.data.price),
                order: {
                    drink: { ...state.order.drink },
                    food: { ...state.order.food }
                }
            }

            delete stateCopy.order.food[action.payload.name];
            return stateCopy;
        case REM_BEVERAGE:
            if (state.order.drink[action.payload.name].quantity > 1){
                return {
                    ...state,
                    beverageIds: [...state.beverageIds],
                    foodIds: [...state.foodIds],
                    allIds: [...state.allIds],
                    cartValue: state.cartValue - parseFloat(action.payload.data.price),
                    order: {
                        drink: { 
                            ...state.order.drink,
                            [action.payload.name]: { ...action.payload.data, quantity: action.payload.quantity }
                        },
                        food: { ...state.order.food }
                    }
                }
            }
            let _stateCopy = {
                ...state,
                foodIds: [...state.foodIds],
                beverageIds: removeItem(state.beverageIds, action.payload.name),
                allIds: removeItem(state.allIds, action.payload.name),
                cartValue: state.cartValue - parseFloat(action.payload.data.price),
                order: {
                    drink: { ...state.order.drink },
                    food: { ...state.order.food }
                }
            }

            delete _stateCopy.order.drink[action.payload.name];
            return _stateCopy;
        case LOAD_INITIAL_STATE:
            console.log("LOADING INITIAL CART")
            return {...state, loading: true}
        case LOAD_INITIAL_STATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false
            }
        case LOAD_INITIAL_STATE_ERROR:
            return {...initialState, loading: false};
        case EMPTY_STATE:
            return {...initialState, loading: false};
        default:
            return state;
    }
}

export default cartReducer;