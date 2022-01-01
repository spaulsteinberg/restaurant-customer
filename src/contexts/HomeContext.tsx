import React, { useCallback, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import IHome from "../models/home/IHome";


export interface IHomeContext {
    loading: boolean;
    value: IHome | null;
}

const HomeContext = React.createContext<IHomeContext | null>(null)

export const useHomeContext = () => useContext(HomeContext)

export const HomeProvider = (props: any) => {
    const [state, setState] = useState<any>({ loading: true, value: null })

    const listenerCallback = useCallback(() => {
        setState((prev:any) => { return { ...prev, loading: true } })
        const unsubscribe = db.collection(process.env.REACT_APP_HOME_DB_COLLECTION!)
            .doc(process.env.REACT_APP_HOME_DB_DOC)
            .onSnapshot(doc => {
                if (doc.exists) {
                    setState({ loading: false, value: doc.data()})
                }
            })
        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = listenerCallback()
        return () => unsubscribe()
    }, [listenerCallback])


    return (
        <HomeContext.Provider value={state}>
            {props.children}
        </HomeContext.Provider>
    )
}