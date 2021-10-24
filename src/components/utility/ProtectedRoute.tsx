import React, { ComponentType } from 'react'
import { Redirect, Route } from 'react-router-dom';
import useCartSelector from '../../hooks/useCartSelector'

type ProtectedRouteProps = {
    route:string;
    component: ComponentType<any>
}
const ProtectedRoute = ({route, component}:ProtectedRouteProps) => {
    const itemsInCart = useCartSelector();
    console.log(itemsInCart)
    return itemsInCart ? <Route path={route} component={component} /> : <Redirect to="/ordering" />
}

export default ProtectedRoute
