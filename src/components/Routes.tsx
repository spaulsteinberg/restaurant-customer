import { Switch, Route } from 'react-router-dom'
import About from './about/About'
import ViewCart from './cart/ViewCart'
import Checkout from './checkout/Checkout'
import Home from './home/Home'
import OrderPage from './ordering/OrderPage'
import PageNotFound from './utility/PageNotFound'
import ProtectedRoute from './utility/ProtectedRoute'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ordering" component={OrderPage} />
            <Route path="/cart" component={ViewCart} exact/>
            <ProtectedRoute route="/cart/checkout" component={Checkout} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}

export default Routes
