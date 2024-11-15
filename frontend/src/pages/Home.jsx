import HomeCards from "../components/Homecards";
import HomeCarousel from "../components/HomeCarousel";
import SocialCard from "../components/SocialCard";
import ScrollingText from '../components/ScrollingText';
import HomeReview from "../components/HomeReview";

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                <div className="App">
                    <ScrollingText text="Start your journey with GearPoint, where every ride begins! Enjoy up to 5% off on your first order by applying the coupon code 'JNTUHUCEJ'. Don’t wait to Gearup with GearPoint today!" />
                </div>
                <HomeCarousel />
                <HomeCards />
                <HomeReview />
                <SocialCard />
            </div>
        </>
    );
};

export default Home;
