import React from 'react'
import { ISection } from '../../models/firebaseMenuResponse'
import OrderSection from './OrderSection'

type OrderNoTabsProps = {
    menus: ISection[],
    existingSelections: string[],
    orderState:any,
    bids:string[],
    fids:string[]
}

const OrderNoTabs = ({menus, existingSelections, orderState, bids, fids}: OrderNoTabsProps) => {
    return (
        <>
            {
                menus
                    .map((section: ISection) =>
                        <OrderSection
                            key={section.menuName}
                            section={section}
                            selections={existingSelections && existingSelections.length > 0 ? orderState : null}
                            bids={bids}
                            fids={fids}
                            showTitle={true}
                        />)
            }
        </>
    )
}

export default OrderNoTabs
