import { useSelector } from "react-redux"
import { RootState } from "../redux/store";


const useCartSelector = () => {
    const count:number = useSelector<RootState, number>(state => state.cart.count);
    return count > 0 ? true : false
}

export default useCartSelector;