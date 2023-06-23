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
        <div className="px-[40px] lg:px-[80px] xl:px-[120px] pb-[80px] mt-[140px]">
            <span className="text-[#f15221] font-bold text-lg">WHERE TO GO</span>
            <h1 className="text-5xl font-semibold mt-[10px] merriweather text-[#1a1a1a]">Popular Destinations</h1>

            <Swiper
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper mt-[60px] h-[560px] cursor-grab"
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1270: {
                        slidesPerView: 3,
                        spaceBetween: 100
                    },
                    1620: {
                        slidesPerView: 4
                    }
                }}>

                {destinations.map((d, index) =>
                    <SwiperSlide key={index} className={`group  ${d.img !== 'indonesia' ? 'ml-[-125px] sm:ml-[0] xl:ml-[-15px]' : 'ml-0'} `}>
                        <div className={`w-[360px] h-[480px] rounded-xl flex flex-col justify-end ${d.img} group-hover:h-[520px] transition-all duration-300 shadow-[0px_15px_20px_0px_rgba(0,0,0,0.15)]`}>
                            <div className="text-center mb-[30px] text-white">
                                <span className="text-lg font-semibold">{d.country}</span>
                                <h3 className="text-4xl font-semibold mt-[5px] merriweather">{d.name}</h3>

                                <div className="[transform:translateZ(0)] px-6 py-3 rounded-full overflow-hidden mt-[10px]
                                 relative before:absolute before:bg-[#f15221] before:top-1/2 before:left-1/2 before:h-8 before:w-12 w-fit mx-auto
                                 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 font-semibold
                                 group-hover:before:scale-[6] group-hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
                                    <span className="relative z-0 text-white transition ease-in-out duration-700">
                                        Learn more about this location
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className="flex flex-row items-center">
                <div className="group w-[200px] [transform:translateZ(0)] px-[15px] py-3 rounded-full overflow-hidden mt-[40px] text-center border border-[#f15221]
                relative before:absolute before:bg-[#f15221] before:bottom-0 before:left-0 before:h-full before:w-full before:duration-500 cursor-pointer
                before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out text-[#f15221]">
                    <span className="relative z-0 transition ease-in-out duration-500 font-semibold group-hover:text-white">See all Destinations</span>
                </div>

                <span className="text-[#919191] ml-auto font-bold text-md underline decoration-[2px] decoration-[#f15221] cursor-pointer">
                    +50 UNIQUE LOCATIONS
                </span>
            </div>
        </div>
    )
}

export default DestinationsSection