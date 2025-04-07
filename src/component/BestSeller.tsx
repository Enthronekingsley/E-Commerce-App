import {useShopContext} from "../context/ShopContext.tsx";
import {useEffect, useState} from "react";
import Title from "./Title.tsx";
import ProductItem from "./ProductItem.tsx";

interface BestSellerType {
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

const BestSeller = () => {
    const { products } = useShopContext();
    const [bestSeller, setBestSeller] = useState<BestSellerType[]>([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, []);

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLER"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
                    expedita quam quas quae nostrum rem.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default BestSeller;