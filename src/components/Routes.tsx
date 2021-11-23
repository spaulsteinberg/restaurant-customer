import { Switch, Route } from 'react-router-dom'
import CartPage from '../pages/cart/CartPage'
import HomePage from '../pages/home/HomePage'
import OrderPage from '../pages/ordering/OrderPage'
import NotFoundPage from '../pages/not-found/NotFoundPage'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/home" component={HomePage} />
            <Route path="/ordering" component={OrderPage} exact/>
            <Route path="/cart" component={CartPage} exact/>
            <Route path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default Routes
