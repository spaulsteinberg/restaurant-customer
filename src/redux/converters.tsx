import firebase from 'firebase/compat/app';

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
}

export const menuConverter = {
    toFirestore(menu: IMenu): firebase.firestore.DocumentData {
      return { name: menu.name };
    },
  
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): IMenu {
      const data = snapshot.data(options)!;
      return { 
          name: data.name,
          optionalMessage: data.optionalMessage,
          menus: data.menus
        }
    }
  };