import { ISection } from "../../models/firebaseMenuResponse"
import OrderItem from "./OrderItem"

type OrderSectionProps = {
    section:ISection;
    selections: any|null;
    bids:string[];
    fids:string[];
    showTitle:boolean
}

const OrderSection = ({ section, selections, bids, fids, showTitle }: OrderSectionProps) => (
    <div className="section-row">
        { showTitle && <div className="section-title">{section.menuName}</div> }
        {section.items.map(item => <OrderItem key={item.item} item={item} selections={selections} bids={bids} fids={fids} />)}
    </div>
)


export default OrderSection
