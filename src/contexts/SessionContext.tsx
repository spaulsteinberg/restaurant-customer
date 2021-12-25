import Cookies from 'js-cookie'
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createCartSessionDB } from "../api/index";

export interface ISessionContext {
    sessionId:string|undefined;
    loading:boolean;
    setOrFetchSession: () => Promise<string|undefined>;
    createSession: () => Promise<string|undefined>;
    getSession: () => string|undefined;
    destroySession: () => void;
}

type SessionProps = { children?: React.ReactNode}

const SessionContext = React.createContext<ISessionContext | null>(null);

export const useSession = () => useContext(SessionContext)

export const SessionProvider = ({ children }: SessionProps) => {
    const [sessionId, setSessionId] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false)
    

    const setOrFetchSession = async ():Promise<string | undefined> => {
        let cookie = Cookies.get(process.env.REACT_APP_SESSION_KEY!)
        if (cookie) {
            console.log("cookie exists")
            setSessionId(cookie)
            setLoading(false)
            return Promise.resolve(cookie)
        } else {
            setLoading(true)
            console.log("creating...")
            try {
                let _sessionId = await createSession()
                setLoading(false)
                return Promise.resolve(_sessionId)
            } catch (err) {
                console.log("session err")
                setLoading(false)
                return Promise.reject(undefined)
            }
        }
    }

    // create a session with id
    const createSession = async ():Promise<string|undefined> => {
        let _sessionId = uuidv4().replaceAll("-", "").substring(0, 19)
        Cookies.set(process.env.REACT_APP_SESSION_KEY!, _sessionId, { expires: 365 })
        try {
            await createCartSessionDB(_sessionId)
            setSessionId(_sessionId)
            return Promise.resolve(_sessionId)
        } catch (err) {
            console.log(err)
            return Promise.reject(undefined)
        }
    }

    // return a session if exists, or else make a call to create one
    const getSession = ():string|undefined => {
        if (sessionId) return sessionId
        console.log("creating cookie")
        createSession().then(sessionId => sessionId).catch(err => undefined)
    }

    // unless the user messed with storage (where there would be a new cart created anyways), cookie will always be defined
    const destroySession = ():void  => {
        const cookie = Cookies.get(process.env.REACT_APP_SESSION_KEY!)
        if (cookie) {
            Cookies.remove(process.env.REACT_APP_SESSION_KEY!)
            setSessionId(undefined)
        }
    }

    const value = {
        sessionId, loading, setOrFetchSession, createSession, getSession, destroySession
    }

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    )
}
