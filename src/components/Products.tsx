"use client";
import { useEffect } from "react";
import Loading from "./Loading";
import { useProductStore } from "@/store";
import { HeartTwoTone } from "@ant-design/icons";
import Link from "next/link";

export default function Products() {
    const { productsData, loading, fetchProducts, addToCart } =
        useProductStore();

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

    console.log(productsData);
    

    return (
        <div className="grid grid-cols-5 items-center mt-10 px-20">
            {productsData.map((product, index) => {
                return (
                    <div key={index} className="mb-3">
                        <div className="relative overflow-hidden w-[230px] h-[250]">
                            <Link href={`/product/${product.id}`}>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    style={{
                                        width: "100%"
                                    }}
                                />
                            </Link>
                            <HeartTwoTone
                                className="absolute top-2 right-2 text-2xl cursor-pointer"
                                twoToneColor="#eb2f96"
                                onClick={() => addToCart(product)}
                            />
                        </div>
                        <div className="px-5">
                            <h3 className="font-bold capitalize mt-3">
                                {product.name}
                            </h3>
                            <p className="font-bold capitalize mb-3 h-6 overflow-hidden">
                                {product.description}
                            </p>
                            <p>Narxi: {product.price} so&apos;m</p>
                            <span>Soni: {product.stock} dona</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
