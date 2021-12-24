
type CartPriceDisplayProps = {
    price: any
}

const CartPriceDisplay = ({ price }: CartPriceDisplayProps) => {
    return (
        <p>
            <strong>Price: ${parseFloat(price).toFixed(2)}</strong>
        </p>
    )
}

export default CartPriceDisplay
