import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


let preloadedState
const persistedCart = localStorage.getItem(process.env.REACT_APP_LOCAL_STORE_KEY!)
try {
    preloadedState = persistedCart ? {cart: JSON.parse(persistedCart)["cart"], menu: JSON.parse(persistedCart)["menu"]} : {}
} catch {
    preloadedState = {}
}


const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => localStorage.setItem(process.env.REACT_APP_LOCAL_STORE_KEY!, JSON.stringify(store.getState())))

export type RootState = ReturnType<typeof store.getState>;

export default store;