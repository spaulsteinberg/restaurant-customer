import { ISection } from "../../models/firebaseMenuResponse"
import OrderItem from "./OrderItem"

type OrderSectionProps = {
    section:ISection
}

const OrderSection = ({section}:OrderSectionProps) => {
    return (
        <div>
            <div>{section.menuName}</div>
            {section.items.map(item => <OrderItem key={item.item} item={item}/>)}
        </div>
    )
}

export default OrderSection
