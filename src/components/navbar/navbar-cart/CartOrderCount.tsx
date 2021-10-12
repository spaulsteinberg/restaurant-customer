type CartOrderCountProps = {
    count:number;
    color:string;
}
const CartOrderCount = (props:CartOrderCountProps) => {
    return ( <sub className="cart-count-sub" style={{color: props.color}}>{props.count}</sub> )
}

export default CartOrderCount
