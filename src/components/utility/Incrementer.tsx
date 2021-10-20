import Button from "react-bootstrap/Button"
import { addIcon, minusIcon } from "../../constants/svgs"

type IncrementerProps = {
    children:any;
    handleOnClickInputChange: (a:number) => void;
}

const Incrementer = ({children, handleOnClickInputChange}:IncrementerProps) => {
    return (
        <>
            <Button variant="outline-danger" className="incrementer-sized" onClick={() => handleOnClickInputChange(-1)}>
                {minusIcon}
            </Button>
            {children}
            <Button variant="outline-primary" className="incrementer-sized" onClick={() => handleOnClickInputChange(1)}>
                {addIcon}
            </Button>
        </>
    )
}

export default Incrementer
