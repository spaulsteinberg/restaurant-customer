export interface IMenu {
    name:string;
    optionalMessage:string;
    menus:ISection[];
}

export interface ISection {
    menuName:string;
    optionalMessage:string;
    items:IItems[];
}

export interface IItems {
    category:string;
    description:string;
    item:string;
    price:string;
    type:string;
    imageAddress:string;
}