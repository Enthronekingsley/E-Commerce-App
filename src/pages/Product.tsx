import {useParams} from "react-router-dom";
import {useShopContext} from "../context/ShopContext.tsx";
import {useEffect, useState} from "react";
import {assets} from "../assets/assets.ts";
import RelatedProducts from "../component/RelatedProducts.tsx";

interface ProductType {
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

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useShopContext();
    const [productData, setProductData] = useState<ProductType | null>(null);
    const [image, setImage] = useState<string>("");
    const [size, setSize] = useState<string>("");

    const fetchProductData = () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    },[productId, products])

    return productData ? (
        <div>
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* ---------- Product Images ---------- */}
                <div className="flex-1 flex flex-col flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => (
                                <img
                                    src={item}
                                    key={index}
                                    alt=""
                                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                />
                            ))
                        }
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* ---------- Product Info ---------- */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {
                                productData.sizes.map((item, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => setSize(item)}
                                        className={`border py-2 px-4 cursor-pointer bg-gray-100 ${item === size ? "bg-orange-500" : ""}`}
                                    >
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => addToCart(productData._id, size)}
                        className="bg-black text-white cursor-pointer px-8 py-3 text-sm active:bg-gray-700"
                    >
                        ADD TO CART
                    </button>

                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* ---------- Description & Review Section ---------- */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>
                        An e-commerce website is an online platform that facilitates the
                        buying and selling of It serves as a virtual marketplace where
                        businesses and individuals can showcase their products, interact
                        with customers, and conduct transactions the need for a physical
                        presence. E-commerce websites have gained immense popularity due to
                        their convenience, accessibility and the global reach they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along
                        with detailes descriptions, images, prices, and any available
                        variations (sizes, colors). Each product usually has its own
                        dedicated page with relevant information.
                    </p>
                </div>
            </div>

            {/* ---------- Display Related Products ---------- */}
            <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
            />
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};
export default Product;