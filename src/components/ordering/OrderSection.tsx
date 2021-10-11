import { ISection } from "../../models/firebaseMenuResponse"
import OrderItem from "./OrderItem"

type OrderSectionProps = {
    section:ISection
}

const OrderSection = ({section}:OrderSectionProps) => {
    return (
        <div className="section-row">
            <div className="section-title">{section.menuName}</div>
            {section.items.map(item => <OrderItem key={item.item} item={item}/>)}
        </div>
    )
}

export default OrderSection
