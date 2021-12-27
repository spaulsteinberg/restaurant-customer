import React from "react"
import { Navbar } from "react-bootstrap"

type NavBarTitleItemProps = {
    wideView: boolean;
    title: string | undefined | null;
}

const NavBarTitleItem = ({ title, wideView }: NavBarTitleItemProps) => {
    return (
        <React.Fragment>
            {
                wideView ?
                    <Navbar.Brand>
                        {title ? title : <div className="title-loading-span"></div>}
                    </Navbar.Brand>
                    : null
            }
        </React.Fragment>
    )
}

export default NavBarTitleItem
