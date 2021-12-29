import ILink from "../../models/home/ILink"

type HomeLinksProps = {
    links: ILink[]
}

const HomeLinks = ({ links }: HomeLinksProps) => {
    return (
        <div className="home-links-input">
            <ul>
                {
                    links.map((link:ILink) => <li key={link.url} className="mb-2"><a href={link.url} target="_blank" rel="noreferrer">{link.display}</a></li>)
                }
            </ul>
        </div>
    )
}

export default HomeLinks
