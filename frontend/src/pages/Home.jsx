import HomeCards from "../components/Homecards";
import HomeCarousel from "../components/HomeCarousel";
import SocialCard from "../components/SocialCard";

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                {/* Scrolling Text */}
                <div className="w-full overflow-hidden bg-gray-200">
                    <div className="whitespace-nowrap animate-scroll-left text-lg font-bold text-gray-800">
                        This text will scroll from right to left 
                        
                    </div>
                </div>

                <HomeCarousel />
                <HomeCards />
                <SocialCard />
            </div>
        </>
    );
};

export default Home;
