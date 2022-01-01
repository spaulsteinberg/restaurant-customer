import React, { MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCartSessionDB } from "../api";
import { db } from "../firebase/firebase";
import { IMenu } from "../models/firebaseMenuResponse";
import { emptyState } from "../redux/cart/cartActions";
import { ISessionContext, useSession } from "./SessionContext";

export interface IMenuContext {
    loading:boolean;
    value: IMenu | null
    error:string;
}

const MenuContext = React.createContext<IMenuContext | null>(null)

export const useMenuContext = () => useContext(MenuContext)

export const MenuProvider = (props:any) => {
    const [state, setState] = useState<any>({loading: false, value: null, error: null})
    const { sessionId } = useSession() as ISessionContext;
    const dispatch = useDispatch()
    const ref:MutableRefObject<string> = useRef<string>("")
    const history = useHistory()

    const listenerCallback = useCallback(() => {
        setState({loading: true, value: state.value, error: state.error})
        return db.collection(process.env.REACT_APP_MENU_DB_COLLECTION!)
            .where("current", "==", true)
            .onSnapshot(snapshot => {
                try {
                    if (!snapshot.empty){
                        const menu = snapshot.docs.map(doc => doc.data())[0]
                        setState({loading: false, value: menu, error: null})
                        if (sessionId) {
                            console.log(ref.current, "vs", menu.name)
                            if (ref.current !== "" && ref.current !== menu.name){
                                createCartSessionDB(sessionId)
                                .then(res => alert(`${ref.current} menus expired. Please make new current selections.`))
                                .catch(err => console.log("error"))
                                .finally(() =>  {
                                    dispatch(emptyState())
                                    history.push('/home')
                                })
                            }
                            ref.current = menu.name
                        }
                    } else {
                        setState({loading: false, value: null, error: "No current menu set."})
                    }
                } catch (err) {
                    console.log(err)
                    setState({loading: false, value: null, error: "An error occurred fetching the menu."})
                }
            })
            // eslint-disable-next-line
    }, [sessionId, dispatch])

    useEffect(() => {
        const unsubscribe = listenerCallback();
        return () => unsubscribe()
    }, [listenerCallback])

    return (
        <MenuContext.Provider value={state}>
            { props.children }
        </MenuContext.Provider>
    )
}