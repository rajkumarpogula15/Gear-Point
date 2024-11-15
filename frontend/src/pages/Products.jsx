import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/api';
import { Loader2, TriangleAlert } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const res = await getProducts();
            console.log("API Response:", res); // Debugging line
            if (res.status === 200) {
                // Check if res.data is an array and set products accordingly
                setProducts(Array.isArray(res.data) ? res.data : []);
            } else {
                setError("Failed to load products. Please check the API response structure.");
            }
        } catch (error) {
            console.error("Fetch error:", error); // Log the error for further inspection
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center" role="status">
                <Loader2 className="text-purple-500 h-14 w-14 animate-spin" aria-label="Loading products" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-red-500 h-12 w-12" aria-hidden="true" />
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    // Log products to ensure it is an array before .map()
    console.log("Products state before mapping:", products);

    if (!Array.isArray(products) || !products.length) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" aria-hidden="true" />
                <p>No Products Available!</p>
            </div>
        );
    }

    return (
        <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2">
            {products.map((product) => {
                console.log(product.title,"Image URL:", product.img); // Debugging line
                return (
                    <ProductCard 
                        img={product.img || "https://via.placeholder.com/150"} 
                        name={product.title} 
                        price={product.price} 
                        key={product._id} 
                    />
                );
            })}

        </div>
    );
};

export default Products;
