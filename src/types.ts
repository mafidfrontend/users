export type ProductsDatasType = {
    productId: string;
    productAbout: string;
    productCount: number;
    productImg: string;
    productName: string;
    productPrice: number;
    productRating: number;
};

export type ProductStore = {
    productsData: ProductsDatasType[];
    cart: ProductsDatasType[];
    loading: boolean;
    fetchProducts: () => void;
    addToCart: (product: ProductsDatasType) => void;
}
