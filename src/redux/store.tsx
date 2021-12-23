import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


let preloadedState
const persistedCart = localStorage.getItem(process.env.REACT_APP_LOCAL_STORE_KEY!)
try {
    preloadedState = persistedCart ? {cart: JSON.parse(persistedCart)} : {}
} catch {
    preloadedState = {}
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe( async () => {
    // will need to replace this with logic to get from db cart from session if exists
    try {
        let serialized = JSON.stringify(store.getState().cart)
        return localStorage.setItem(process.env.REACT_APP_LOCAL_STORE_KEY!, serialized)
    } catch (err){
        return {}
    } 
})

export type RootState = ReturnType<typeof store.getState>;

export default store;