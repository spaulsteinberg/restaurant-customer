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

    const invalidCookieMessage = 'Invalid session ID. Try clearing your cookies.'
    const dbRequestFailureMessage = 'Could not save item. Please try again.'

    const dispatch = useDispatch();

    // click type will be 1 for adding items and 0 for removing. on reset or error, set to -1
    const [submitState, setSubmitState] = useState({loading:false, error: '', loadType: -1})
    const [showAddItem, setShowAddItem] = useState<boolean>(isFocusedItem ? false : true);
    const [count, setCount] = useState<number>(isFocusedItem ? isFocusedItem.quantity : 1);

    const handleShowAddItemClick = () => {

        if (!session?.sessionId) return setSubmitState({loading: false, error: invalidCookieMessage, loadType: -1 })

        setSubmitState({loading: true, error: '', loadType: 1})
        const {description, ...rest} = {...item}
        addCartItem(session.sessionId, { ...rest, quantity: 1 }, true, isFoodType)
        .then(res => {
            dispatch(incrementCartCount());
            isFoodType ? dispatch(insertFood({ name: item.item, data: item, quantity: 1 })) : dispatch(insertBeverage({ name: item.item, data: item, quantity: 1 }))
            setSubmitState({loading: false, error: '', loadType: -1})
            setShowAddItem(false)
        })
        .catch(err => {
            console.log("error ------", err)
            setSubmitState({loading: false, error: dbRequestFailureMessage, loadType: -1})
        })
    }

    const handleIncrementClick = () => {

        if (!session?.sessionId) return setSubmitState({loading: false, error: invalidCookieMessage, loadType: -1})

        setSubmitState({loading: true, error: '', loadType: 1})
        const {description, ...rest} = {...item}
        addCartItem(session.sessionId, { ...rest, quantity: count + 1 }, false, isFoodType)
        .then(res => {
            dispatch(incrementCartCount());
            isFoodType ? dispatch(insertFood({ name: item.item, data: item, quantity: count + 1 })) : dispatch(insertBeverage({ name: item.item, data: item, quantity: count + 1 }))
            setCount(prev => prev + 1);
            setSubmitState({loading: false, error: '', loadType: -1})
        })
        .catch(err => {
            console.log("error ------", err)
            setSubmitState({loading: false, error: dbRequestFailureMessage, loadType: -1})
        })
    }

    const handleDecrementClick = () => {
        if (!session?.sessionId) return setSubmitState({loading: false, error: invalidCookieMessage, loadType: -1})
        
        setSubmitState({loading: true, error: '', loadType: 0})
        const {description, ...rest} = {...item}
        removeCartItem(session.sessionId, { ...rest, quantity: count - 1 }, count - 1 < 1, isFoodType)
        .then(res => {
            dispatch(decrementCartCount())
            isFoodType ? dispatch(removeFood({ name: item.item, data: item, quantity: count - 1 })) : dispatch(removeBeverage({ name: item.item, data: item, quantity: count - 1 }))
            setSubmitState({loading: false, error: '', loadType: -1})
            count === 1 ? setShowAddItem(true) : setCount(prev => prev - 1)
        })
        .catch(err => {
            console.log("removal error...")
            setSubmitState({loading: false, error: dbRequestFailureMessage, loadType: -1})
        })
    }

    return (
        <Card className="order-item">
            <OrderItemInfoCard photo={item.imageAddress ? item.imageAddress : null} name={item.item} description={item.description} price={item.price} />
            <OrderItemButtons
                showAddItem={showAddItem}
                count={count}
                isLoading={submitState.loading}
                loadType={submitState.loadType}
                error={submitState.error}
                add={handleShowAddItemClick}
                inc={handleIncrementClick}
                dec={handleDecrementClick}
            />
        </Card>
    )
}

export default OrderItem
