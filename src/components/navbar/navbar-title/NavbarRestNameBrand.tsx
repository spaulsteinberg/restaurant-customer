import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { useHistory } from "react-router-dom"

type NavbarRestNameBrandProps = {
    wideView: boolean;
    title: string | undefined | null;
}

const NavbarRestNameBrand = ({ title, wideView }: NavbarRestNameBrandProps) => {
    const history = useHistory()
    const handleBrandClick = () => history.push("/home")
    return (
        <React.Fragment>
            {
                wideView ?
                    <Navbar.Brand onClick={handleBrandClick}>
                        {title ? title : <div className="title-loading-span"></div>}
                    </Navbar.Brand>
                    : null
            }
        </React.Fragment>
    )
}

export default NavbarRestNameBrand
