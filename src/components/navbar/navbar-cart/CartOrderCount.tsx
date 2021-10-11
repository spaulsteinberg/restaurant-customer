type CartOrderCountProps = {
    color:string;
}
const CartOrderCount = (props:CartOrderCountProps) => {
    return ( <sub className="cart-count-sub" style={{color: props.color}}>0</sub> )
}

export default CartOrderCount
