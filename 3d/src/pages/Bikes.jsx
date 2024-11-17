import React, { useEffect, useState } from 'react';
import BikeCard from '../components/BikeCard'; // Updated import for the BikeCard component
import { getBikes } from '../api/api'; // API function for fetching bikes
import { Home, Loader2, TriangleAlert } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import HomeCarousel from '../components/HomeCarousel';
import ScrollingText from '../components/ScrollingText';
import { Navbar } from '../components';
import DiscountBanner from "../components/DiscountBanner";
import HomeReview from '../components/HomeReview';
import RegistrationFormPopup from '../components/RegistrationFormPopup';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/Footer';

const Bikes = () => {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getBikes();
                console.log("API Response:", res); // Debugging line

                if (res.status === 200 && Array.isArray(res.data)) {
                    setBikes(res.data);
                } else {
                    setError("Failed to load bikes. Please check the API response structure.");
                }
            } catch (error) {
                console.error("Fetch error:", error);
                setError("An error occurred. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-red-500 h-12 w-12" aria-hidden="true" />
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (!bikes.length) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" aria-hidden="true" />
                <p>No Bikes Available!</p>
            </div>
        );
    }

    return (
        <>
            < Navbar/>
            <DiscountBanner/>
            <div className="App">
                <ScrollingText text="Start your journey with GearPoint, where every ride begins! Enjoy up to 5% off on your first order by applying the coupon code 'JNTUHUCEJ'. Don’t wait to Gearup with GearPoint today!" />
            </div>
            <HomeCarousel/>
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-[8vh] mb-12 gap-y-20 gap-x-2">
                {bikes.map((bike) => {
                    console.log(bike.title, "Image URL:", bike.img); // Debugging line
                    return (
                        <BikeCard 
                            img={bike.img || "https://via.placeholder.com/150"} 
                            name={bike.title} 
                            price={bike.price} 
                            brand={bike.brand || "Unknown"} 
                            rating={bike.rating || 0} 
                            key={bike._id} 
                        />
                    );
                })}
            </div>
            {/* <HomeReview/> */}
            {/* <RegistrationFormPopup/> */}
            {/* <ContactForm/> */}
            <Footer/>
        </>
    );
};

export default Bikes;

