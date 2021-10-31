import { ICheckoutPayload } from "./ICheckoutPayload";

export interface ICheckoutAction {
    type:string;
    payload:ICheckoutPayload
}