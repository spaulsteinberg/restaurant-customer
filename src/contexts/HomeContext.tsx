import React, { useContext, useEffect, useState } from "react";
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

    useEffect(() => {
        (async () => {
            setState((prev:any) => { return { ...prev, loading: true } })
            db.collection(process.env.REACT_APP_HOME_DB_COLLECTION!)
                .doc(process.env.REACT_APP_HOME_DB_DOC)
                .onSnapshot(doc => {
                    if (doc.exists) {
                        console.log(doc.data())
                        setState({ loading: false, value: doc.data()})
                    }
                })
        })()
    }, [])


    return (
        <HomeContext.Provider value={state}>
            {props.children}
        </HomeContext.Provider>
    )
}