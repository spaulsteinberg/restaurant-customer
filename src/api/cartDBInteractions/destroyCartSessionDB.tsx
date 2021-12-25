import { db } from "../../firebase/firebase"

const destroySessionDB = (sessionId:string) => db.collection(process.env.REACT_APP_CART_DB_COLLECTION!).doc(sessionId).delete()

export default destroySessionDB