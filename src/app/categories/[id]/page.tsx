"use client";
import Loading from "@/components/Loading";
import { Catigories_Product_Id } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Catigoria_Id() {
    const [catigoriaId, setCatigoriaId] = useState<Catigories_Product_Id>();
    const { id } = useParams();
    const page = Number(id) || 1;

    useEffect(() => {
        axios
            .get(
                `https://nt.softly.uz/api/front/products?page=${page}&limit=10`
            )
            .then((res) => {
                console.log(res.data);
                setCatigoriaId(res.data);
            });
    }, [page]);

    if (!catigoriaId) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loading />
            </div>
        );
    }

    if (!catigoriaId.items || catigoriaId.items.length === 0) {
        return <div className="text-center text-4xl mt-10">Ma’lumot yo‘q</div>;
    }

    return (
        <div className="container mx-auto  flex flex-wrap gap-15 mt-10 ">
            {catigoriaId.items.map((product) => (
                <div key={product.id}>
                    {" "}
                    <div className="bg-white shadow-md rounded-lg p-4 max-w-[250px] mb-5">
                        {product.imageUrl ? (
                            <Link href={`/product_id/${product.id}`}>
                                <Image
                                    width={230}
                                    height={250}
                                    src={product.imageUrl}
                                    alt={product.name || "Mahsulot"}
                                    className="mx-auto rounded-lg object-cover"
                                />
                            </Link>
                        ) : (
                            <div className="bg-gray-200 w-[230px] h-[250px] flex items-center justify-center rounded-lg">
                                <p className="text-gray-500">Rasm yo‘q</p>
                            </div>
                        )}

                        <div className="mt-4">
                            <p className="text-gray-700 text-sm">
                                {product.description || "Tavsif mavjud emas"}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-lg font-semibold text-gray-900">
                                    {product.price
                                        ? `$${product.price}`
                                        : "Narx noma’lum"}
                                </p>
                                <button className="border-2 border-amber-500 p-1 rounded-md bg-amber-500 hover:text-white transition">
                                    shop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Catigoria_Id;
