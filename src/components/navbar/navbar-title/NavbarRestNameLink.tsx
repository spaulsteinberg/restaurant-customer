import { NavLink } from "react-router-dom"

type NavbarRestNameLinkProps = {
    wideView:boolean;
    title:string|undefined;
}

const NavbarRestNameLink = ({wideView, title}:NavbarRestNameLinkProps) => {
    return !wideView ? <NavLink to="/home" className="navigation-link">{title ? title : <div className="title-loading-span"></div> }</NavLink> : null
}

export default NavbarRestNameLink
