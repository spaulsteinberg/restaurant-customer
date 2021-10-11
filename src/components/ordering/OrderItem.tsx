import Card from 'react-bootstrap/Card'
import { IItems } from '../../models/firebaseMenuResponse';
import logo from './istockphoto-1157515115-612x612.jpg'
import OrderItemButtons from './OrderItemButtons';
import OrderItemInfoCard from './OrderItemCardInfo';

type OrderItemProps = {
    item:IItems;
}

const OrderItem = ({item}:OrderItemProps) => {
    return (
        <Card className="order-item">
            <OrderItemInfoCard photo={logo} name={item.item} description={item.description} price={item.price} />
            <OrderItemButtons />
        </Card>
    )
}

export default OrderItem
