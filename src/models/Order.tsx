export interface IOrder {
    drink:IBeverage[];
    food:IFood[];
}

export interface IBeverage {
    category:string;
    item:string;
    price:number|string;
}

export interface IFood {
    category:string;
    main:string;
    price:number|string;
    additions:IAdditions[];
    subtractions:string[];
}

export interface IAdditions {
    item:string;
    price:number|string;
}