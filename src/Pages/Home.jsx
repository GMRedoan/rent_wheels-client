import Banner from '../Components/Header/Banner';
import Slides from '../Components/Header/Slides';
import WhyRent from '../Components/homeLayout/WhyRent';
import TopCars from '../Components/homeLayout/TopCars';
import Feedback from '../Components/homeLayout/Feedback';
 
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Slides></Slides>

 
            <WhyRent></WhyRent>
            <TopCars></TopCars>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;
