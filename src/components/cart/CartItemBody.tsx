import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { DRINK_TYPE } from "../../constants/keys";
import { decrementCartCount, incrementCartCount, insertBeverage, insertFood, removeBeverage, removeFood } from "../../redux/cart/cartActions";
import Incrementer from "../utility/Incrementer";

type CartItemBodyProps = {
    data:any;
}

const CartItemBody = ({data}:CartItemBodyProps) => {
    
    const [quantity, setQuantity] = useState<number>(data.quantity);
    const dispatch = useDispatch();

    const processCartAddition = () => {
        console.log(data)
        dispatch(incrementCartCount());
        data.type === DRINK_TYPE ? dispatch(insertBeverage({name: data.item, data: data, quantity: quantity + 1})) : dispatch(insertFood({name: data.item, data: data, quantity: quantity + 1}))
        setQuantity(q => q + 1);
    }

    const processCartSubtraction = () => {
        console.log(data)
        dispatch(decrementCartCount());
        data.type === DRINK_TYPE ? dispatch(removeBeverage({name: data.item, data: data, quantity: quantity - 1})) : dispatch(removeFood({name: data.item, data: data, quantity: quantity - 1}))
        setQuantity(q => q - 1);
    }
    const handleChange = (num:number) => {
        num > 0 ? processCartAddition() : processCartSubtraction();
    }

    return (
        <>
            <Card.Title>{data.item}</Card.Title>
            <p>{data.description}</p>
            <p>
                <span className="mr-2">Quantity: </span>
                <Incrementer handleOnClickInputChange={handleChange}>
                    <span className="mx-2">{quantity}</span>
                </Incrementer>
            </p>
            <p>Price: ${parseFloat(data.price).toFixed(2)} </p>
            <p>Total: ${(quantity * parseFloat(data.price)).toFixed(2)}</p>
        </>
    )
}

export default CartItemBody
