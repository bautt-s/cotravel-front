import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const DestinationsSection: React.FC = () => {
    const destinations = [
        { name: 'Kelimutu', img: 'indonesia', country: 'Indonesia' }, { name: 'Salzburg', img: 'osterreich', country: 'Österreich' },
        { name: 'Yavirnyk', img: 'yavirnyk', country: 'Ukraine' }, { name: 'Nagarkot', img: 'nepal', country: 'Nepal' },
        { name: 'Ampezzo', img: 'ampezzo', country: 'Italy' }, { name: 'Ffestiniog', img: 'ffestiniog', country: 'United Kingdom' }]

    return (
        <div className="px-[120px] pb-[80px] mt-[140px]">
            <span className="text-[#f15221] font-bold text-lg">WHERE TO GO</span>
            <h1 className="text-5xl font-semibold mt-[10px] merriweather text-[#1a1a1a]">Popular Destinations</h1>

            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper mt-[60px] h-[560px]">

                {destinations.map((d, index) =>
                    <SwiperSlide key={index} className={`group  ${d.img !== 'indonesia' ? 'ml-[-15px]' : 'ml-0'} `}>
                        <div className={`w-[360px] h-[480px] rounded-xl flex flex-col justify-end ${d.img} group-hover:h-[520px] transition-all duration-300 shadow-[0px_15px_20px_0px_rgba(0,0,0,0.15)]`}>
                            <div className="text-center mb-[30px] text-white">
                                <span className="text-lg font-semibold">{d.country}</span>
                                <h3 className="text-4xl font-semibold mt-[5px] merriweather">{d.name}</h3>

                                <button className="mt-[20px] group-hover:bg-[#f15221] px-[20px] rounded-full py-[5px] transition-all duration-500 font-semibold">
                                    Learn more about this place
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className="flex flex-row items-center">
                <button className="px-[25px] py-[10px] text-[#f15221] border border-[#f15221] rounded-full 
            hover:bg-[#f15221] transition-colors duration-300 hover:text-white font-semibold">
                    See all Destinations
                </button>

                <span className="text-[#919191] ml-auto font-bold text-md underline decoration-[2px] decoration-[#f15221] cursor-pointer">
                    +50 UNIQUE LOCATIONS
                </span>
            </div>
        </div>
    )
}

export default DestinationsSection