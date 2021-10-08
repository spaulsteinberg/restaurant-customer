import firebase from 'firebase/compat/app';
import { IMenu } from '../models/firebaseMenuResponse';

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