import React, { useEffect, useState } from 'react';
import { getAccessories } from '../api/api'; // API function for fetching accessories
import { Home, Loader2, TriangleAlert } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import HomeCarousel from '../components/HomeCarousel';
import ScrollingText from '../components/ScrollingText';
import { Navbar } from '../components';
import AccessoryCard from '../components/BikeCard'; // Assuming you have an AccessoryCard component

const Accessories = () => {
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
            <Navbar />
            {/* <ScrollingText /> */}
            {/* <HomeCarousel /> */}
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-[22vh] mb-12 gap-y-20 gap-x-2">
                {accessories.map((accessory) => {
                    console.log(accessory.name, "Image URL:", accessory.img); // Debugging line
                    return (
                        <AccessoryCard 
                            img={accessory.img || "https://via.placeholder.com/150"} 
                            name={accessory.name} 
                            price={accessory.price} 
                            brand={accessory.brand || "Unknown"} 
                            rating={accessory.rating || 0} 
                            key={accessory._id} 
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Accessories;
