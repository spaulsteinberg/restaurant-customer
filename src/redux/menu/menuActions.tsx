import { Dispatch } from "react"
import { db } from "../../firebase/firebase"
import { menuConverter } from "../converters"
import { GET_MENU, GET_MENU_ERROR, GET_MENU_SUCCESS } from "./menuTypes"


export const getMenu = () => {
    return {
        type: GET_MENU
    }
}

export const getMenuSuccess = (payload:any) => {
    return {
        type: GET_MENU_SUCCESS,
        payload: payload
    }
}

export const getMenuError = (error:string) => {
    return {
        type: GET_MENU_ERROR,
        payload: error
    }
}

export const getCurrentMenu = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getMenu())
        await db.collection(process.env.REACT_APP_MENU_DB_COLLECTION!)
        .where("current", "==", true)
        .withConverter(menuConverter)
        .get() 
        .then(response => {
            if (response){
                dispatch(getMenuSuccess(response.docs[0].data()))
            } else {
                dispatch(getMenuError("No current menu set."))
            }
        })
        .catch(err => {
            console.log(err)
            dispatch(getMenuError("An error occurred getting the current menu"))
        })
    }
}