import HomePhotoBackground from '../../components/home/HomePhotoBackground';
import HomeRouteButtons from '../../components/home/HomeRouteButtons';
import HomeTitle from '../../components/home/HomeTitle'
import { IHomeContext, useHomeContext } from '../../contexts/HomeContext';
import './home-styles.scss';

const HomePage = () => {
    const home = useHomeContext() as IHomeContext;
    console.log(home)
    return (
        <>
            <HomePhotoBackground bgUrl={home.value?.bpAddress!}>
                <HomeTitle name={home.value?.name!} />
                <HomeRouteButtons buttons={home.value?.gotos!} />
            </HomePhotoBackground>
        </>
    )
}

export default HomePage
