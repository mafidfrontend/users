import Products from "@/components/Products";

export default function Home() {
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
            <Products />
        </div>
    );
}
