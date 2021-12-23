import { db } from '../../firebase/firebase'

const createCartSessionDB = (uniqueSessionId: string): Promise<void> => {
    return db.collection("cart")
        .doc(uniqueSessionId)
        .set({
            complete: false,
            cart: {
                allIds: [],
                beverageIds: [],
                foodIds: [],
                cartValue: 0,
                count: 0,
                order: { drink: {}, food: {} },
            }
        })
        .then((res: any) => {
            Promise.resolve("created")
        })
        .catch((err: any) => {
            console.log(err)
            Promise.reject("error")
        })
}

export default createCartSessionDB