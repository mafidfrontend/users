"use client";
import { CategoriesType } from "@/types";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Categories() {
    const [categoriesData, setCategoriesData] = useState<CategoriesType[]>([]);
    useEffect(() => {
        axios.get("https://nt.softly.uz/api/front/categories/").then((res) => {
            console.log(res.data);
            setCategoriesData(res.data);
        });
    }, []);
    return (
        <ul className="flex flex-wrap items-center justify-between">
            {categoriesData.map((category, index) => {
                return (
                    <li key={index}>
                        <Link href={`/catigoria_id/${category.id}`}>
                            <p>{category.name}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Categories;
