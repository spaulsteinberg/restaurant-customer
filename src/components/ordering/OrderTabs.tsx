import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import { ISection } from "../../models/firebaseMenuResponse"
import OrderSection from "./OrderSection"

type OrderTabsProps = {
    menus: ISection[],
    existingSelections: string[],
    orderState: any,
    bids: string[],
    fids: string[]
}

const OrderTabs = ({ menus, existingSelections, orderState, bids, fids }: OrderTabsProps) => {
    return (
        <Tabs id="order-sect-tab" defaultActiveKey={0} className="tabs-row">
            {
                menus.map((s: ISection, i: number) => (
                    <Tab eventKey={i} title={s.menuName} key={s.menuName} className="mb-3 w-100">
                        <OrderSection section={s}
                            selections={existingSelections && existingSelections.length > 0 ? orderState : null}
                            bids={bids}
                            fids={fids}
                            showTitle={false} />
                    </Tab>
                ))
            }
        </Tabs>
    )
}

export default OrderTabs
