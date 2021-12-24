import Incrementer from "../utility/Incrementer"

type CartQuantityIncrementerProps = {
    quantity: number,
    handleChange: (num: number) => void
}

const CartQuantityIncrementer = ({ quantity, handleChange }: CartQuantityIncrementerProps) => {
    return (
        <p>
            <span className="mr-2">Quantity: </span>
            <Incrementer handleOnClickInputChange={handleChange}>
                <span className="mx-2">{quantity}</span>
            </Incrementer>
        </p>
    )
}

export default CartQuantityIncrementer
