import {createContext, ReactNode, useContext, useState} from "react";
import {products} from "../assets/assets.ts";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ShopContextType {
    currency: string;
    delivery_fee: number;
    search: string;
    setSearch: (search: string) => void;
    showSearch: boolean;
    setShowSearch: (showSearch: boolean) => void;
    cartItems: Record<string, Record<string, number>>;
    addToCart: (itemId: string, size: string) => void;
    updateQuantity: (itemId: string, size: string, quantity: number) => void;
    getCartCount: () => number;
    getCartAmount: () => number;
    navigate: (path: string) => void;
    products: {
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
    }[];
}

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = ({ children } : { children: ReactNode }) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<Record<string, Record<string, number>>>({});
    const navigate = useNavigate();

    const addToCart = (itemId: string, size: string) => {
        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        const cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                }catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId: string, size: string, quantity: number) => {
        const cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += (itemInfo?.price ?? 0) * cartItems[items][item];
                    }
                }catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    }
    return (
        <ShopContext.Provider value={value}>
            { children }
        </ShopContext.Provider>
    )
}

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShopContext must be used within a ShopContextProvider")
    }
    return context;
}

export default ShopContextProvider;