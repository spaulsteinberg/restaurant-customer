import Container from 'react-bootstrap/Container'
import NavigationBar from './navbar/NavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ICartState } from '../redux/cart/cartReducer'
import { useEffect } from 'react'
import { loadInitalStateFromDB } from '../redux/cart/cartActions'
import RootContent from './RootContent'
import Routes from './Routes'

type RootProps = {
    sessionId:string|undefined;
}

const Root = ({sessionId}: RootProps) => {
    const cartState = useSelector<RootState, ICartState>(state => state.cart);
    const dispatch = useDispatch()
    useEffect(() => {
        if (sessionId) dispatch(loadInitalStateFromDB(sessionId))
    }, [dispatch, sessionId])
    // TODO -- incorporate redux initial load

    console.log(sessionId, cartState.loading)
    return (
        <Container fluid className="p-0">
            <NavigationBar />
            <RootContent storeLoading={cartState.loading}>
                <Routes />
            </RootContent>
        </Container>
        
    )
}

export default Root
