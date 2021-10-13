import { IItems } from "./firebaseMenuResponse";

export interface ICartAction {
    type:string;
    payload: ICartActionPayload;
}

export interface ICartActionPayload {
    name:string;
    data:IItems;
    quantity:number;
}