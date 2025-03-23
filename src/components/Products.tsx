"use client";
import { ProductsDatasType } from "@/types";
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Products() {
    const [productsData, setProductsData] = useState<ProductsDatasType[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://67df9d1f7635238f9aaa0ed7.mockapi.io/mahsulotlar/product/product"
            )
            .then((response) => {
                console.log(response.data);
                setProductsData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                message.error("Xatolik yuzaga keldi");
            });
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
                        <div>
                            <img
                                src="https://fakeimg.pl/300/"
                                alt={product.productAbout}
                            />
                        </div>
                        <div className="px-5">
                            <h3 className="font-bold capitalize mt-3">
                                {product.productName}
                            </h3>
                            <p className="font-bold capitalize mb-3">{product.productAbout}</p>
                            <p>Rating: {product.productRating}</p>
                            <p>Narxi: {product.productPrice} so'm</p>
                            <span>Soni: {product.productCount} dona</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
