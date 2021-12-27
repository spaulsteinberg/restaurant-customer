import HomePhotoBackground from '../../components/home/HomePhotoBackground';
import HomeTitle from '../../components/home/HomeTitle'
import { IHomeContext, useHomeContext } from '../../contexts/HomeContext';
import './home-styles.scss';

const HomePage = () => {
    const home = useHomeContext() as IHomeContext;
    console.log(home)
    return (
        <div>
            <HomePhotoBackground bgUrl={home.value?.bpAddress!}>
                <HomeTitle name={home.value?.name!} />
            </HomePhotoBackground>
        </div>
    )
}

export default HomePage
