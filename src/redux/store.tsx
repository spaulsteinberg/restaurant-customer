import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


let preloadedState
const persistedTodosString = localStorage.getItem('cart')
preloadedState = persistedTodosString ? {cart: JSON.parse(persistedTodosString)} : {}


const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => localStorage.setItem('cart', JSON.stringify(store.getState().cart)))

export type RootState = ReturnType<typeof store.getState>;

export default store;