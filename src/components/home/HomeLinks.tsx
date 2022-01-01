import ILink from "../../models/home/ILink"
import ListFlexView from "./ListFlexView"
import ListLinksView from "./ListLinksView"

type HomeLinksProps = {
    links: ILink[];
    isTabletWidth:boolean;
}

const HomeLinks = ({ links, isTabletWidth }: HomeLinksProps) => isTabletWidth ? <ListLinksView links={links} /> : <ListFlexView links={links} />

export default HomeLinks
