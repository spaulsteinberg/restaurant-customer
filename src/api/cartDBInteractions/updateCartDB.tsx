import { db } from '../../firebase/firebase'

const updateCartDB = async (sessionId:string, cart:any):Promise<string> => db.collection(process.env.REACT_APP_CART_DB_COLLECTION!)
        .doc(sessionId)
        .update({cart: cart})
        .then((res:any) => Promise.resolve("resolved!"))
        .catch((err:any) => Promise.reject("error occurred"))

export default updateCartDB