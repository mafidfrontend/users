export type ProductsDatasType = {
    id: number;
    name: string;
    description: string;
    price: string;
    stock: number;
    categoryId: number;
    createdAt: string;
    imageUrl: string;
};

export type ProductStore = {
    productsData: ProductsDatasType[];
    cart: ProductsDatasType[];
    loading: boolean;
    fetchProducts: () => void;
    addToCart: (product: ProductsDatasType) => void;
};

export type CategoriesType = {
    id: number,
    name: string,
    description: string,
    createdAt: string
}