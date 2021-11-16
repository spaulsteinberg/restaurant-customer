import { IMenu } from "../models/firebaseMenuResponse";
import { menuConverter } from "../redux/converters";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';

export const checkForCurrentMenu = () => {
    return db.collection(process.env.REACT_APP_MENU_DB_COLLECTION!)
        .where("current", "==", true)
        .withConverter(menuConverter)
        .get()
        .then((response:firebase.firestore.QuerySnapshot<IMenu>) => {
            if (response) {
                const currentName = response.docs[0].data().name;
                return currentName === localStorage.getItem(process.env.REACT_APP_LOCAL_MENU_KEY!)
            }
            return false;
        })
        .catch(() => false)
} 