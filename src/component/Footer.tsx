import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[2fr_2fr_2fr_1fr] gap-14 my-10 mt-40 text-sm footer">
                <div>
                    {/*Logo*/}
                    <div className="mb-5 w-32">
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
                    </div>

                    <div className="flex flex-col gap-2">
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li><Link to="">About Iyke</Link></li>
                            <li><Link to="">Iyke for Good</Link></li>
                            <li><Link to="">Iyke at work</Link></li>
                            <li><Link to="">Get the Iyke Mobile App</Link></li>
                            <li><Link to="">Amazon Prime Benefits</Link></li>
                            <li><Link to="">Iyke VIP Benefits</Link></li>
                            <li><Link to="">Coupon & Sales</Link></li>
                            <li><Link to="">Acessibility Statement</Link></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="font-medium text-xl mb-5">Customer Service</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li><Link to="" className="">FAQ</Link></li>
                        <li><Link to="">Contact Info</Link></li>
                        <li><Link to="">Shipping And Returns Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="font-medium text-xl mb-5">Resources</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li><Link to="">Measurement Guide</Link></li>
                        <li><Link to="">Size Conversion Chat</Link></li>
                        <li><Link to="">Measure Your Bra Size</Link></li>
                        <li><Link to="">Associates Program</Link></li>
                        <li><Link to="">Press Kit & Brand Inquiries</Link></li>
                        <li><Link to="">Site Map</Link></li>
                        <li><Link to="">Take Survey</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="font-medium text-xl mb-5">Explore Iyke</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li><Link to="">Clothing</Link></li>
                        <li><Link to="">The Style Room</Link></li>
                        <li><Link to="">Eyewear</Link></li>
                        <li><Link to="">New Arrivals</Link></li>
                        <li><Link to="">Running</Link></li>
                        <li><Link to="">Jacket</Link></li>
                        <li><Link to="">Shoes</Link></li>
                        <li><Link to="">Jacket</Link></li>
                        <li><Link to="">Watches</Link></li>
                        <li><Link to="">Iyke Adaptive</Link></li>
                        <li><Link to="">All Departments</Link></li>
                        <li><Link to="">Brand</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025@iyke.com - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer;