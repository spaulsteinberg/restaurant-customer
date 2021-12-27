
type HomePhotoBackgroundProps = {
    bgUrl: string;
    children:any;
}

const HomePhotoBackground = ({children, bgUrl}:HomePhotoBackgroundProps) => {
    return (
        <div className="background-photo-container" style={{backgroundImage: `url(${bgUrl})`}}>
            { children }
        </div>
    )
}

export default HomePhotoBackground
