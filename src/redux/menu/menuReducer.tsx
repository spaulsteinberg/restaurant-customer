import { IMenu } from "../converters"
import { GET_MENU, GET_MENU_ERROR, GET_MENU_SUCCESS } from "./menuTypes"

interface IMenuState {
    loading:boolean,
    data:IMenu|null,
    error:any
}
const initialState:IMenuState = {
    loading: false,
    data: null,
    error: null
}

const menuReducer = (state = initialState, action:any) => {
    switch(action.type){
        case GET_MENU:
            return {...state, loading: true}
        case GET_MENU_SUCCESS:
            return {...state, loading: false, data: action.payload, error: null}
        case GET_MENU_ERROR:
            return {...state, loading: false, data: null, error: action.payload}
        default:
            return {...state}
    }
}

export default menuReducer;