import Button from 'react-bootstrap/Button'
import IGotoRoute from '../../models/home/IGotoRoute'

type RouteButtonProps = {
    btn:IGotoRoute;
    handleClick: (e:React.MouseEvent<HTMLButtonElement>, r:string) => void;
}

const RouteButton = ({btn, handleClick}:RouteButtonProps) => {
    return (
        <Button
            variant={btn.background}
            className={`mx-${btn.margin} mb-1 border-${btn.border} text-${btn.text} route-button-${btn.hoverBackground}`}
            onClick={e => handleClick(e, btn.route)}>
            {btn.display}
        </Button>
    )
}

export default RouteButton
