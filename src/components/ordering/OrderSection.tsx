import { ISection } from "../../models/firebaseMenuResponse"
import OrderItem from "./OrderItem"

type OrderSectionProps = {
    section:ISection;
    selections: any|null;
    bids:string[];
    fids:string[];
}

const OrderSection = ({ section, selections, bids, fids }: OrderSectionProps) => (
    <div className="section-row">
        <div className="section-title">{section.menuName}</div>
        {section.items.map(item => <OrderItem key={item.item} item={item} selections={selections} bids={bids} fids={fids} />)}
    </div>
)


export default OrderSection
