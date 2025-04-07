import {assets} from "../assets/assets.ts";
import {useShopContext} from "../context/ShopContext.tsx";
import {useEffect, useState} from "react";
import Title from "../component/Title.tsx";
import ProductItem from "../component/ProductItem.tsx";

interface FilterProductsType {
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

const Collection = () => {
    const { products, search, showSearch } = useShopContext();
    const [showFilter, setShowFilter] = useState<boolean>();
    const [filterProducts, setFilterProducts] = useState<FilterProductsType[]>([]);
    const [category, setCategory] = useState<string[]>([])
    const [subCategory, setSubCategory] = useState<string[]>([]);
    const [sortType, setSortType] = useState<string>("relevance");

    const toggleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (category.includes(event.target.value)) {
            setCategory((prevCategory) => prevCategory.filter((item) => item !== event.target.value))
        }else {
            setCategory((prevCategory) => [...prevCategory, event.target.value]);
        }
    };

    const toggleSubCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (subCategory.includes(event.target.value)) {
            setSubCategory((prevSubCategory) => prevSubCategory.filter((item) => item !== event.target.value))
        }else {
            setSubCategory((prevSubCategory) => [...prevSubCategory, event.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProducts = () => {
        const filterProductCopy = filterProducts.slice();

        switch (sortType) {
            case "low-high":
                setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
                break;

            case "high-low":
                setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
                break;

            default:
                applyFilter();
                break;
        }

    }

    useEffect(() => {
        applyFilter();
    },[category, subCategory, search, showSearch]);

    useEffect(() => {
        sortProducts();
    },[sortType])

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200">
            {/*Filter Options*/}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                >
                    FILTERS
                    <img
                        src={assets.dropdown_icon}
                        alt=""
                        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                    />
                </p>

                {/*Category Filter*/}
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Men"}
                                className="w-3"
                                onChange={toggleCategory}
                            />
                            Men
                        </label>

                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Women"}
                                className="w-3"
                                onChange={toggleCategory}
                            />
                            Women
                        </label>

                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Kids"}
                                className="w-3"
                                onChange={toggleCategory}
                            />
                            Kids
                        </label>
                    </div>
                </div>

                {/*SubCategory Filter*/}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Topwear"}
                                className="w-3"
                                onChange={toggleSubCategory}
                            />
                            Topwear
                        </label>

                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Bottomwear"}
                                className="w-3"
                                onChange={toggleSubCategory}
                            />
                            Bottomwear
                        </label>

                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                value={"Winterwear"}
                                className="w-3"
                                onChange={toggleSubCategory}
                            />
                            Winterwear
                        </label>
                    </div>
                </div>
            </div>

            {/*Right Side*/}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    {/*Product Sort*/}
                    <label className="text-sm font-medium text-gray-700">
                        Sort By:
                        <select
                            onChange={(e) => setSortType(e.target.value)}
                            className="border-2 border-gray-300 text-sm px-2 ml-2"
                        >
                            <option value={"relevance"}>Relevance</option>
                            <option value={"low-high"}>Price: Low to High</option>
                            <option value={"high-low"}>Price: High to Low</option>
                        </select>
                    </label>
                </div>

                {/*Map Products*/}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            name={item.name}
                            id={item._id}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Collection;