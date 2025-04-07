import {assets} from "../assets/assets.ts";

const Hero = () => {
    return (
        <div className="flex flex-col border border-gray-400 sm:flex-row">
            {/* Hero Left Side */}
            <div className="justify-center w-full py-10 sm:w-1/2 flex items-center sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="text-sm font-medium md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>
            {/*Hero Right Side*/}
            {/*<img src={assets.hero_img} alt="" className="w-full h-3/4 sm:w-1/2" />*/}
            {/*<img src={assets.hero_img} alt="" className="w-full sm:w-1/2 max-h-[400px] object-contain" />*/}
            <img src={assets.hero_img} alt="" className="w-full sm:w-1/2 max-h-[500px] object-cover" />
        </div>
    )
}
export default Hero;