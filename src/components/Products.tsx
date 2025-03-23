"use client";
import { useEffect } from "react";
import Loading from "./Loading";
import { useProductStore } from "@/store";
import { HeartTwoTone } from "@ant-design/icons";

export default function Products() {
    const { productsData, loading, fetchProducts, addToCart } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-[100vh] flex mx-auto">
                <Loading />
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-between mt-10 px-20">
            {productsData.map((product, index) => {
                return (
                    <div key={index} className="mb-3">
                        <div className="relative">
                            <img
                                src="https://fakeimg.pl/300/"
                                alt={product.productAbout}
                            />
                             <HeartTwoTone
                            className="absolute top-2 right-2 text-2xl cursor-pointer"
                            twoToneColor="#eb2f96"
                            onClick={() => addToCart(product)}
                        />
                        </div>
                        <div className="px-5">
                            <h3 className="font-bold capitalize mt-3">
                                {product.productName}
                            </h3>
                            <p className="font-bold capitalize mb-3">{product.productAbout}</p>
                            <p>Rating: {product.productRating}</p>
                            <p>Narxi: {product.productPrice} so&apos;m</p>
                            <span>Soni: {product.productCount} dona</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
