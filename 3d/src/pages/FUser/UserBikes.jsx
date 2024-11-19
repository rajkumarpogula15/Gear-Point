import React, { useEffect, useState } from 'react';
import BikeCard from '../../components/BikeCard'; // Updated import for the BikeCard component
import { getBikes } from '../../api/api'; // API function for fetching bikes
import { Home, Loader2, TriangleAlert } from 'lucide-react';
import LoadingScreen from '../../components/LoadingScreen';
import HomeCarousel from '../../components/HomeCarousel';
import ScrollingText from '../../components/ScrollingText';
import DiscountBanner from "../../components/DiscountBanner";
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';  // Assuming fadeIn is defined in utils/motion.js

const UserBikes = () => {
    const [bikes, setBikes] = useState(null);
    const [filteredBikes, setFilteredBikes] = useState(null); // State for filtered bikes
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getBikes();


                if (res.status === 200 && Array.isArray(res.data)) {
                    setBikes(res.data);
                    setFilteredBikes(res.data); // Initialize filtered bikes with all bikes
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

    // Filter bikes based on search query
    useEffect(() => {
        if (bikes) {
            const filtered = bikes.filter(bike =>
                bike.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                bike.brand.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredBikes(filtered);
        }
    }, [searchQuery, bikes]);

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

    if (!filteredBikes.length) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" aria-hidden="true" />
                <p>No Bikes Available!</p>
            </div>
        );
    }

    return (
        <>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

            {/* Discount Banner and Scrolling Text */}
            <div className="App">
                <ScrollingText text="Start your journey with GearPoint, where every ride begins! Enjoy up to 5% off on your first order by applying the coupon code 'JNTUHUCEJ'. Don’t wait to Gearup with GearPoint today!" />
            </div>
            <HomeCarousel />
            {/* Search Bar */}
            <div className="flex justify-center mt-10">
                <input
                    type="text"
                    placeholder="Search bikes by name or brand..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded-lg p-2 w-[60vw] h-12 mt-5 focus:outline-none focus:border-purple-500"
                />
            </div>
            {/* Display Filtered Bikes */}
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap gap-y-20 ml-1 mt-[8vh] mb-8 gap-x-3">
                {filteredBikes.map((bike, index) => {
                    return (
                        <motion.div
                            key={bike._id} 
                            variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
                            initial="hidden"
                            animate="show"
                            className="w-full sm:w-[360px] p-5"
                        >
                            <BikeCard
                                id={bike._id}
                                img={bike.img || "https://via.placeholder.com/150"}
                                name={bike.title}
                                price={bike.price}
                                brand={bike.brand || "Unknown"}
                                rating={bike.rating || 0}
                            />
                        </motion.div>
                    );
                })}
            </div>

            <Footer />
        </div>
        </>
    );
};

export default UserBikes;
