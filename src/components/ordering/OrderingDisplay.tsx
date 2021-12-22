import useWidth from '../../hooks/useWidth'
import { ISection } from '../../models/firebaseMenuResponse'
import OrderNoTabs from './OrderNoTabs'
import OrderTabs from './OrderTabs'

type OrderingDisplayProps = {
    menus: ISection[],
    existingSelections: string[],
    orderState:any,
    bids:string[],
    fids:string[]
}

const OrderingDisplay = ({menus, existingSelections, orderState, bids, fids}:OrderingDisplayProps) => {

    const { wideView } = useWidth(768)

    return wideView ? 
            <OrderNoTabs menus={menus} existingSelections={existingSelections} orderState={orderState} bids={bids} fids={fids} />
                : <OrderTabs menus={menus} existingSelections={existingSelections} orderState={orderState} bids={bids} fids={fids} />
}

export default OrderingDisplay
