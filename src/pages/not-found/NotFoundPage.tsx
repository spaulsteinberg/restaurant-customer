import { Link } from 'react-router-dom'
import './not-found-styles.scss';

const NotFoundPage = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <h1>Hmmmmm....We cant find that page!</h1>
            </div>
                <h4>Are you looking for the...</h4>
            <div className="mt-3 link-container link-lists">
                <ul>
                    <li>
                        <Link to="/home">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/ordering">Menu Page</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart Screen</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotFoundPage
