
// for typing order in cart
export interface ICartOrder {
    food:ICartOrderSection;
    drink:ICartOrderSection;
}

export interface ICartOrderSection {
    category:string;
    description:string;
    item:string;
    price:string;
    type:string;
    quantity:number
}