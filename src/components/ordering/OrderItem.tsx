import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../../api';
import { FOOD_TYPE } from '../../constants/keys';
import { IItems } from '../../models/firebaseMenuResponse';
import { decrementCartCount, incrementCartCount, insertBeverage, insertFood, removeBeverage, removeFood } from '../../redux/cart/cartActions';
import OrderItemButtons from './OrderItemButtons';
import OrderItemInfoCard from './OrderItemCardInfo';
import { useSession } from '../../contexts/SessionContext';

type OrderItemProps = {
    item: IItems;
    selections: any | null;
    bids: string[];
    fids: string[]
}

const selectFood = (key: string, set: any) => set.food[key];
const selectBeverage = (key: string, set: any) => set.drink[key];

const OrderItem = ({ item, selections, bids, fids }: OrderItemProps) => {
    const session = useSession()

    const isFoodType: boolean = item.type === FOOD_TYPE
    let isFocusedItem = null;
    if (selections) {
        const isFood = fids.find(f => item.item === f);
        isFocusedItem = isFood ? selectFood(item.item, selections) : selectBeverage(item.item, selections);
    }

    const dispatch = useDispatch();

    const [showAddItem, setShowAddItem] = useState<boolean>(isFocusedItem ? false : true);
    const [count, setCount] = useState<number>(isFocusedItem ? isFocusedItem.quantity : 1);

    /*****Replace w useCookies hook or whatever 
     * 
     * TODO --- 
     * 3) add some sort of loading indicator or disabled styles to order items
     * 
     * 
    */

    const handleShowAddItemClick = async () => {
        console.log("sending....")
        console.log(session?.sessionId)
        if (!session?.sessionId) return

        try {
            let result = await addCartItem(session.sessionId, { item: item.item, category: item.category, price: item.price, quantity: 1, type: item.type }, true, isFoodType)
            console.log(result)
            dispatch(incrementCartCount());
            isFoodType ? dispatch(insertFood({ name: item.item, data: item, quantity: 1 })) : dispatch(insertBeverage({ name: item.item, data: item, quantity: 1 }))
            setShowAddItem(false)
        } catch (err) {
            console.log("error ------", err)
        }
    }

    const handleIncrementClick = async () => {
        console.log("loading...")

        if (!session?.sessionId) return 

        try {
            let result = await addCartItem(session.sessionId, { item: item.item, category: item.category, price: item.price, quantity: count + 1, type: item.type }, false, isFoodType)
            console.log(result)
            dispatch(incrementCartCount());
            isFoodType ? dispatch(insertFood({ name: item.item, data: item, quantity: count + 1 })) : dispatch(insertBeverage({ name: item.item, data: item, quantity: count + 1 }))
            setCount(prev => prev + 1);
        } catch (err) {
            console.log("error ------", err)
        }
        console.log("finished...")
    }

    const handleDecrementClick = async () => {

        if (!session?.sessionId) return

        try {
            let result = await removeCartItem(session.sessionId, { item: item.item, category: item.category, price: item.price, quantity: count - 1, type: item.type }, count - 1 < 1, isFoodType)
            console.log('[REMOVE]', result)
            dispatch(decrementCartCount())
            isFoodType ? dispatch(removeFood({ name: item.item, data: item, quantity: count - 1 })) : dispatch(removeBeverage({ name: item.item, data: item, quantity: count - 1 }))
            count === 1 ? setShowAddItem(true) : setCount(prev => prev - 1)
        } catch (err) {
            console.log("removal error...")
        }
    }

    return (
        <Card className="order-item">
            <OrderItemInfoCard photo={item.imageAddress ? item.imageAddress : null} name={item.item} description={item.description} price={item.price} />
            <OrderItemButtons
                showAddItem={showAddItem}
                add={handleShowAddItemClick}
                inc={handleIncrementClick}
                dec={handleDecrementClick}
                count={count}
            />
        </Card>
    )
}

export default OrderItem
