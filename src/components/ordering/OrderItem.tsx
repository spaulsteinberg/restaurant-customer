import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { DRINK_TYPE } from '../../constants/keys';
import { IItems } from '../../models/firebaseMenuResponse';
import { decrementCartCount, incrementCartCount, insertBeverage, insertFood, removeBeverage, removeFood } from '../../redux/cart/cartActions';
import OrderItemButtons from './OrderItemButtons';
import OrderItemInfoCard from './OrderItemCardInfo';

type OrderItemProps = {
    item:IItems;
    selections: any | null;
    bids:string[];
    fids:string[]
}

const selectFood = (key:string, set:any) => set.food[key];
const selectBeverage = (key:string, set:any) => set.drink[key];

const OrderItem = ({item, selections, bids, fids}:OrderItemProps) => {


    let isFocusedItem = null;
    if (selections) {
        const isFood = fids.find(f => item.item === f);
        isFocusedItem = isFood ? selectFood(item.item, selections) : selectBeverage(item.item, selections);
    }

    const dispatch = useDispatch();

    const [showAddItem, setShowAddItem] = useState<boolean>(isFocusedItem ? false : true);
    const [count, setCount] = useState<number>(isFocusedItem ? isFocusedItem.quantity : 1);

    const handleShowAddItemClick = () => {
        dispatch(incrementCartCount());
        item.type === DRINK_TYPE ? dispatch(insertBeverage({name: item.item, data: item, quantity: 1})) : dispatch(insertFood({name: item.item, data: item, quantity: 1})) 
        setShowAddItem(false)
    }

    const handleIncrementClick = () => {
        dispatch(incrementCartCount());
        item.type === DRINK_TYPE ? dispatch(insertBeverage({name: item.item, data: item, quantity: count + 1})) : dispatch(insertFood({name: item.item, data: item, quantity: count + 1})) 
        setCount(prev => prev + 1);
    }

    const handleDecrementClick = () => {
        dispatch(decrementCartCount())
        item.type === DRINK_TYPE ? dispatch(removeBeverage({name: item.item, data: item, quantity: count - 1})) : dispatch(removeFood({name: item.item, data: item, quantity: count - 1}))
        if (count === 1) 
            setShowAddItem(true);
        else 
            setCount(prev => prev - 1)
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
