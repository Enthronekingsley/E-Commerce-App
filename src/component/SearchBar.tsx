import {assets} from "../assets/assets.ts";
import {useShopContext} from "../context/ShopContext.tsx";
import {useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";


const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useShopContext();
    const [visible, setVisible] = useState<boolean>(false);
    const location = useLocation();

    const clearSearch = useCallback(() => {
        setShowSearch(false);
        setSearch("");
    }, [setShowSearch, setSearch]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                clearSearch();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [clearSearch]);


    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? (
        <div className=" border-t border-b border-gray-200 bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-700 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="flex-1 outline-none bg-inherit text-sm"
                />
                <img
                    src={assets.search_icon}
                    onClick={() => setShowSearch(false)}
                    alt=""
                    className="w-4"
                />
            </div>
            <img
                onClick={clearSearch}
                src={assets.cross_icon}
                alt=""
                className="inline w-3 cursor-pointer"
            />
        </div>
    ) : null;
};
export default SearchBar;