import Title from "./Title.tsx";
import {useShopContext} from "../context/ShopContext.tsx";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem.tsx";

interface ProductsType {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
}

const LatestCollection = () => {
    const { products } = useShopContext();
    const [latestProducts, setLatestProducts] = useState<ProductsType[]>([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[])

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem Ipsum is simply dumm text of the printing and typesetting
                    industry. Lorem Ipsum has been the</p>
            </div>

            {/*Rendering Products*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default LatestCollection;