import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about/About'
import Home from './home/Home'
import OrderPage from './ordering/OrderPage'
import PageNotFound from './utility/PageNotFound'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ordering" component={OrderPage} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}

export default Routes
