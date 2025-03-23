"use client";
import { ProductsDatasType } from "@/types";
import { LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
    const [productsData, setProductsData] = useState<ProductsDatasType[]>([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios
            .get(
                "https://67df9d1f7635238f9aaa0ed7.mockapi.io/mahsulotlar/product/product"
            )
            .then((response) => {
                console.log(response.data);
                setProductsData(response.data)
                setLoading(false)
            }).catch(() => {
                setLoading(false)
                message.error("Xatolik yuzaga keldi")
            })
    }, []);

    if(loading) {
        return <LoadingOutlined />
    }

    return (
        <div className="container mx-auto">
            <div>
                <img
                    style={{
                        height: 500,
                        width: "100%",
                    }}
                    src="/banner.jpg"
                    alt=""
                />
            </div>
            <div className="flex flex-wrap justify-between mt-10 px-20">
                {productsData.map((product, index) => {
                    return (
                        <div key={index} className="mb-3">
                            <div>
                                <img src="https://fakeimg.pl/300/" alt={product.productAbout} />
                            </div>
                            <h3 className="font-bold">{product.productName}</h3>
                            <p>{product.productAbout}</p>
                            <p>Rating: {product.productRating}</p>
                            <p>Narxi: {product.productPrice}</p>
                            <span>Soni: {product.productCount}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}