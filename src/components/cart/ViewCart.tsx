import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import CartItem from "./CartItem"
import './cart-styles.scss'
import TotalFooter from "./TotalFooter"

type ViewCartProps = {}

const ViewCart = (props:ViewCartProps) => {
    const cart = useSelector<RootState, number>(state => state.cart.count)
    const renderMockCart = () => {
        let items = [];
        for (let i = 0; i < cart; i++){
            items.push(<CartItem key={i} />)
        }
        return items.map(i => i)
    }
    return (
        <div className="view-cart-item-container p-4">
            {renderMockCart()}
            <TotalFooter />
        </div>
    )
}

export default ViewCart
