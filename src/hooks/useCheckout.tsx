import { useSelector } from "react-redux"
import { RootState } from "../redux/store";


const useCheckout = () => {
    const complete:boolean = useSelector<RootState, boolean>(state => state.checkout.hasCompletedOrder);
    return complete
}

export default useCheckout;