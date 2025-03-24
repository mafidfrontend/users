"use client"
import { useProductStore } from "@/store";
import { Button } from "antd";
import { useParams } from "next/navigation";
import React from "react";

function ProductPage() {
    const { id } = useParams();
    const { productsData } = useProductStore();

    const product = productsData.find((p) => p.productId === id);

    if (!product) return <p>Mahsulot topilmadi...</p>;

    return (
        <div className="container mx-auto">
            <h2 className="my-5 text-5xl">{product.productName}</h2>
            <div className="flex flex-row gap-4">
                <div className="border rounded-lg w-[450px] h-[350px] flex items-center justify-center"></div>
                <div className="flex flex-col justify-start space-y-2 text-2xl ml-8">
                    <p>Narxi: {product.productPrice} so&apos;m</p>
                    <p>Mahsulot haqida: {product.productAbout}</p>
                    <p>Qoldi: {product.productCount} dona</p>
                    <div className="pt-2">
                        <Button type="primary" className="w-[500px]" size="large">Buyurtma berish</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
