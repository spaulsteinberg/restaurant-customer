import DoubleArrowIcon from '../../components/home/DoubleArrowIcon';
import HomeBodyContainer from '../../components/home/HomeBodyContainer';
import HomeDescription from '../../components/home/HomeDescription';
import HomeLinks from '../../components/home/HomeLinks';
import HomePhotoBackground from '../../components/home/HomePhotoBackground';
import HomeRouteButtons from '../../components/home/HomeRouteButtons';
import HomeTitle from '../../components/home/HomeTitle'
import { IHomeContext, useHomeContext } from '../../contexts/HomeContext';
import useHeight from '../../hooks/useHeight';
import useWidth from '../../hooks/useWidth';
import './home-styles.scss';

const HomePage = () => {
    const home = useHomeContext() as IHomeContext;
    const isMinHeight = useHeight(420)
    const isMinWidth = useWidth(500).wideView
    const isTabletWidth = useWidth(768).wideView

    return (
        <>
            {
                home.value ?
                    <div className="home-background">
                        <HomePhotoBackground bgUrl={home.value?.bpAddress!}>
                            <HomeTitle name={home.value?.name!} />
                            <HomeRouteButtons buttons={home.value?.gotos!} />
                            {
                                isMinHeight && isMinWidth &&
                                <DoubleArrowIcon width={16} height={16} fill={"black"} handleDownscrollClick={() => window.scrollBy(0, 300)} />
                            }
                        </HomePhotoBackground>
                        <HomeBodyContainer>
                            <HomeDescription description={home.value?.description} />
                            <HomeLinks links={home.value?.links ? home.value?.links : []} isTabletWidth={isTabletWidth} />
                        </HomeBodyContainer>
                    </div>
                : <HomePhotoBackground bgUrl=""> </HomePhotoBackground>
        }
        </>
    )
}

export default HomePage
