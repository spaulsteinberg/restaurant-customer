import React from 'react'
import { useHistory } from 'react-router-dom'
import IGotoRoute from '../../models/home/IGotoRoute';
import RouteButton from './RouteButton';

type HomeRouteButtonsProps = {
    buttons: IGotoRoute[]
}

const HomeRouteButtons = ({ buttons }: HomeRouteButtonsProps) => {
    const history = useHistory();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, route: string) => {
        event.preventDefault()
        history.push(route)
    }
    return (
        <div className="route-button-container">
            { buttons.map((btn:IGotoRoute) => <RouteButton key={btn.display} btn={btn} handleClick={handleClick} />)}
        </div>
    )
}

export default HomeRouteButtons
