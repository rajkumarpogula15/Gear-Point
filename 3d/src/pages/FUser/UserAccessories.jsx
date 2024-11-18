import React, { useEffect, useState } from 'react';
import { getAccessories } from '../../api/api.js'; // API function for fetching accessories
import { TriangleAlert } from 'lucide-react';
import LoadingScreen from '../../components/LoadingScreen';
import BikeCard from '../../components/BikeCard'; // Assuming you have an AccessoryCard component
import Footer from '../../components/Footer';
import { motion } from "framer-motion";  // Import motion from Framer Motion
import { fadeIn } from "../../utils/motion"; // Assuming you have fadeIn animation variant defined
// import UserNavBar from './UserNavBar';

const UserAccessories = () => {
    const [accessories, setAccessories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getAccessories();
                console.log("API Response:", res); // Debugging line

                if (res.status === 200 && Array.isArray(res.data)) {
                    setAccessories(res.data);
                } else {
                    setError("Failed to load accessories. Please check the API response structure.");
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

    if (!accessories.length) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" aria-hidden="true" />
                <p>No Accessories Available!</p>
            </div>
        );
    }

    return (
        <>
            {/* <UserNavBar /> */}
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-[22vh] ml-1 mb-8  gap-x-3">
                {accessories.map((accessory, index) => {
                    // console.log(accessory.name, "Image URL:", accessory.img); // Debugging line
                    return (
                        <motion.div
                            key={accessory._id}
                            variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
                            initial="hidden"
                            animate="show"
                            className="w-full sm:w-[360px] p-5"
                        >
                            <BikeCard 
                                id={accessory._id}
                                img={accessory.img || "https://via.placeholder.com/150"} 
                                name={accessory.name} 
                                price={accessory.price} 
                                brand={accessory.brand || "Unknown"} 
                                rating={accessory.rating || 0} 
                            />
                        </motion.div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default UserAccessories;
