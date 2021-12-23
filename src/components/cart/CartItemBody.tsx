import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../api";
import { FOOD_TYPE } from "../../constants/keys";
import { useSession } from "../../contexts/SessionContext";
import { decrementCartCount, incrementCartCount, insertBeverage, insertFood, removeBeverage, removeFood } from "../../redux/cart/cartActions";
import Incrementer from "../utility/Incrementer";

type CartItemBodyProps = {
    data: any;
}

const CartItemBody = ({ data }: CartItemBodyProps) => {

    const [quantity, setQuantity] = useState<number>(data.quantity);
    const dispatch = useDispatch();
    const session = useSession();

    const isFoodItem = data.type === FOOD_TYPE

    const processCartAddition = () => {
        if (!session?.sessionId) return;

        addCartItem(session.sessionId, { item: data.item, category: data.category, price: data.price, quantity: quantity + 1, type: data.type }, false, isFoodItem)
            .then(res => {
                dispatch(incrementCartCount());
                isFoodItem ? dispatch(insertFood({ name: data.item, data: data, quantity: quantity + 1 })) : dispatch(insertBeverage({ name: data.item, data: data, quantity: quantity + 1 }))
                setQuantity(q => q + 1);
            })
            .catch(err => console.log(err))
    }

    const processCartSubtraction = () => {
        if (!session?.sessionId) return;
        removeCartItem(session.sessionId, { item: data.item, category: data.category, price: data.price, quantity: quantity - 1, type: data.type}, quantity - 1 < 1, isFoodItem)
        .then(res => {
            setQuantity(q => q - 1);
            dispatch(decrementCartCount());
            isFoodItem ? dispatch(removeFood({ name: data.item, data: data, quantity: quantity - 1 })) : dispatch(removeBeverage({ name: data.item, data: data, quantity: quantity - 1 }))
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (num: number) => {
        num > 0 ? processCartAddition() : processCartSubtraction();
    }

    return (
        <>
            <Card.Title>{data.item}</Card.Title>
            <p><strong>Price: ${parseFloat(data.price).toFixed(2)}</strong></p>
            <p>
                <span className="mr-2">Quantity: </span>
                <Incrementer handleOnClickInputChange={handleChange}>
                    <span className="mx-2">{quantity}</span>
                </Incrementer>
            </p>
        </>
    )
}

export default CartItemBody
