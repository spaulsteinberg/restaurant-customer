import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../api";
import { FOOD_TYPE } from "../../constants/keys";
import { INVALID_COOKIE_MSG } from "../../constants/messages";
import { useSession } from "../../contexts/SessionContext";
import useMessageTimeout from "../../hooks/useMessageTimeout";
import { decrementCartCount, incrementCartCount, insertBeverage, insertFood, removeBeverage, removeFood } from "../../redux/cart/cartActions";
import DynamicLoadingSpinner from "../utility/DynamicLoadingSpinner";
import CartPriceDisplay from "./CartPriceDisplay";
import CartQuantityIncrementer from "./CartQuantityIncrementer";
import ShowErrorMessage from "./ShowErrorMessage";

type CartItemBodyProps = {
    data: any;
}

const CartItemBody = ({ data }: CartItemBodyProps) => {

    const [quantity, setQuantity] = useState<number>(data.quantity);
    const [submitState, setSubmitState] = useState({loading: false, error: '', loadType: -1})
    const dispatch = useDispatch();
    const session = useSession();
    const visible = useMessageTimeout(submitState.error, 3000)

    const isFoodItem = data.type === FOOD_TYPE

    const processCartAddition = () => {
        if (!session?.sessionId) return setSubmitState({loading: false, error: INVALID_COOKIE_MSG, loadType: -1});

        setSubmitState({loading: true, error: '', loadType: 1})
        addCartItem(session.sessionId, { item: data.item, category: data.category, price: data.price, quantity: quantity + 1, type: data.type, imageAddress: data.imageAddress }, false, isFoodItem)
            .then(res => {
                dispatch(incrementCartCount());
                isFoodItem ? dispatch(insertFood({ name: data.item, data: data, quantity: quantity + 1 })) : dispatch(insertBeverage({ name: data.item, data: data, quantity: quantity + 1 }))
                setQuantity(q => q + 1);
                setSubmitState({loading: false, error: '', loadType: -1})
            })
            .catch(err => {
                console.log(err)
                setSubmitState({loading: false, error: 'Could not save item.', loadType: -1})
            })
    }

    const processCartSubtraction = () => {
        if (!session?.sessionId) return setSubmitState({loading: false, error: INVALID_COOKIE_MSG, loadType: -1});

        setSubmitState({loading: true, error: '', loadType: 0})
        removeCartItem(session.sessionId, { item: data.item, category: data.category, price: data.price, quantity: quantity - 1, type: data.type, imageAddress: data.imageAddress}, quantity - 1 < 1, isFoodItem)
        .then(res => {
            setQuantity(q => q - 1);
            setSubmitState({loading: false, error: '', loadType: -1})
            dispatch(decrementCartCount());
            isFoodItem ? dispatch(removeFood({ name: data.item, data: data, quantity: quantity - 1 })) : dispatch(removeBeverage({ name: data.item, data: data, quantity: quantity - 1 }))
        })
        .catch(err => {
            console.log(err)
            setSubmitState({loading: false, error: 'Could not save item.', loadType: -1})
        })
    }

    const handleChange = (num: number) => {
        num > 0 ? processCartAddition() : processCartSubtraction();
    }

    return (
        <>
            <Card.Title>{data.item}</Card.Title>
            <CartPriceDisplay price={data.price} />
            {
                submitState.loading ? 
                    <DynamicLoadingSpinner containerClasses="loading-req-p" variant={submitState.loadType === 1 ? "primary" : "danger"} /> 
                    : submitState.error && visible ? <ShowErrorMessage error={submitState.error} />
                    : <CartQuantityIncrementer quantity={quantity} handleChange={handleChange} /> 
            }
        </>
    )
}

export default CartItemBody
