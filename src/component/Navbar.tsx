// import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {assets} from "../assets/assets.ts";
import {useState} from "react";
import {useShopContext} from "../context/ShopContext.tsx";

const Navbar = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const { setShowSearch, getCartCount } = useShopContext();
    return (
        <div className="flex flex-row items-center justify-between py-5 font-medium">
            <Link to="/">
                <p className="text-5xl font-extrabold tracking-[-0.1em] text-black flex items-center">
                    iyk
                    <span className="relative">e
                        <svg
                            className="absolute -bottom-2 left-0 w-7 h-4 text-black"
                            viewBox="0 0 24 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M2 2 C8 8, 16 8, 22 2"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="transparent"
                          />
                        </svg>
                    </span>
                    <span className="text-black">.</span>
                </p>
            </Link>

            <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
                <li>
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>COLLECTION</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>CONTACT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
            </ul>

            <div className="flex items-center gap-6">
                <img
                    onClick={() => setShowSearch(true)}
                    src={assets.search_icon}
                    alt="searc_icon"
                    className="w-5 cursor-pointer"
                />

                <div className="relative group">
                    <Link to="/login">
                        <img
                            src={assets.profile_icon}
                            alt="profile_icon"
                            className="w-5 cursor-pointer"
                        />
                    </Link>
                    <div className="absolute right-0 hidden pt-4 group-hover:block">
                        <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to={"/cart"} className="relative">
                    <img
                        src={assets.cart_icon}
                        alt="cart_icon"
                        className="w-5 min-w-5"
                    />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 bg-black rounded-full h-4 leading-4 aspect-square text-center text-white text-[8px]">{getCartCount()}</p>
                </Link>

                <img
                    src={assets.menu_icon}
                    alt="menu_icon"
                    className="w-5 cursor-pointer sm:hidden"
                    onClick={() => setVisible(true)}
                />
            </div>

            {/*Sidebar Menu for Small Screens*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600">
                    <div
                        className="flex items-center gap-4 p-3 cursor-pointer"
                        onClick={() => setVisible(false)}
                    >
                        <img
                            src={assets.dropdown_icon}
                            alt=""
                            className="h-4 rotate-180"
                        />
                        <p>Back</p>
                    </div>

                    <NavLink
                        to={"/"}
                        className="py-2 pl-6 border"
                        onClick={() => setVisible(false)}
                    >
                        <p>HOME</p>
                    </NavLink>
                    <NavLink
                        to={"/collection"}
                        className="py-2 pl-6 border"
                        onClick={() => setVisible(false)}
                    >
                        <p>COLLECTION</p>
                    </NavLink>
                    <NavLink
                        to={"/about"}
                        className="py-2 pl-6 border"
                        onClick={() => setVisible(false)}
                    >
                        <p>ABOUT</p>
                    </NavLink>
                    <NavLink
                        to={"/contact"}
                        className="py-2 pl-6 border"
                        onClick={() => setVisible(false)}
                    >
                        <p>CONTACT</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;