
export interface ICheckoutPayload {
    data:any;
}

export interface ICheckoutRequest {
    firstName:string;
    lastName:string;
    email:string;
    credit:string
    date:null;
    totalCost:number;
    order:IPostOrderOrder;
}

export interface IPostOrderOrder {
    food:any;
    drink:any;
}