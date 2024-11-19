import React, { useEffect, useState } from 'react';
import { getAccessories } from '../api/api'; // API function for fetching accessories
import { TriangleAlert } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import { Navbar } from '../components';
import ProductCard from '../components/HomeProducts'; // Assuming you have an AccessoryCard component
import Footer from '../components/Footer';
import { motion } from "framer-motion";  // Import motion from Framer Motion
import { fadeIn } from "../utils/motion"; // Assuming you have fadeIn animation variant defined

const Accessories = () => {
    const [accessories, setAccessories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

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

    // Filter accessories based on search query
    const filteredAccessories = accessories?.filter((accessory) =>
        accessory.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

    if (!filteredAccessories?.length) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" aria-hidden="true" />
                <p>No Accessories Available!</p>
            </div>
        );
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="w-screen h-full flex flex-col items-center mt-[13vh] mb-8">
                
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search accessories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border mb-8 rounded-lg p-2 text-lg w-[60vw] h-12 focus:outline-none focus:border-purple-500"
                />
                {/* Accessories List */}
                <div className="w-full flex justify-start items-start flex-row flex-wrap gap-x-3 bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    {filteredAccessories.map((accessory, index) => (
                        <motion.div
                            key={accessory._id}
                            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                            initial="hidden"
                            animate="show"
                            className="w-full sm:w-[360px] p-5"
                        >
                            <ProductCard
                                img={accessory.img || "https://via.placeholder.com/150"}
                                name={accessory.name}
                                price={accessory.price}
                                brand={accessory.brand || "Unknown"}
                                rating={accessory.rating || 0}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Accessories;
