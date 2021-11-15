import firebase from 'firebase/compat/app';
import { Dispatch } from "react"
import { db } from "../../firebase/firebase"
import { IMenu } from '../../models/firebaseMenuResponse';
import { emptyState } from '../cart/cartActions';
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
        .then((response:firebase.firestore.QuerySnapshot<IMenu>) => {
            if (response){
                const menuData = response.docs[0].data()

                if (!localStorage.getItem(process.env.REACT_APP_LOCAL_MENU_KEY!) || localStorage.getItem(process.env.REACT_APP_LOCAL_MENU_KEY!) !== menuData.name){
                    dispatch(emptyState())
                    localStorage.setItem(process.env.REACT_APP_LOCAL_MENU_KEY!, menuData.name)
                }

                dispatch(getMenuSuccess(menuData))
            } else {
                dispatch(getMenuError("No current menu set."))
            }
        })
        .catch(err => dispatch(getMenuError("An error occurred getting the current menu")))
    }
}