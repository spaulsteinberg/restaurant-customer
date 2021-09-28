import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <h1>Could not find the specified page!</h1>
            </div>
            <div className="text-dark">
                <p>Go <Link to="/home">Home</Link></p>
            </div>
        </div>
    )
}

export default PageNotFound
