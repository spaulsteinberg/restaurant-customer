import Container from 'react-bootstrap/Container'
import NavigationBar from './navbar/NavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect } from 'react'
import { loadInitalStateFromDB } from '../redux/cart/cartActions'
import RootContent from './RootContent'
import Routes from './Routes'

type RootProps = {
    sessionId:string|undefined;
}

const Root = ({sessionId}: RootProps) => {
    const cartLoading = useSelector<RootState, any>(state => state.cart?.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        if (sessionId) dispatch(loadInitalStateFromDB(sessionId))
    }, [dispatch, sessionId])
    // TODO -- incorporate redux initial load

    console.log("[ROOT]", sessionId, cartLoading)
    return (
        <Container fluid className="p-0">
            <NavigationBar />
            <RootContent storeLoading={cartLoading}>
                <Routes />
            </RootContent>
        </Container>
        
    )
}

export default Root
