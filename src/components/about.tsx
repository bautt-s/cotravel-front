import { RxTriangleRight } from 'react-icons/rx'

const AboutSection: React.FC = () => {
    return (
        <div className="flex flex-row px-[120px] py-[120px] gap-[80px] justify-center parallax">
            <div>
                <span className="text-[#f15221] font-bold text-lg">OUR PASSION</span>
                <h1 className="merriweather text-5xl font-semibold mt-[10px] text-[#1a1a1a]">About us</h1>

                <p className="w-[650px] mt-[20px] font-semibold text-[#1a1a1a] text-lg text-justify">
                    CoTravel is a travel agency stablished in 1998 by our founders, the two Sánchez brothers. Our main mission is not
                    only to provide reliable and enjoyable trips, but to make them accessible, while also reaching out to those who want
                    to meet  people who share their same interests and travel objectives.
                </p>

                <div className="flex flex-row gap-x-[35px] font-semibold mt-[20px]">
                    <div className="flex flex-col">
                        <span className="merriweather text-2xl text-[#f15221]">25</span>
                        <span className="max-w-[10ch] leading-[20px] mt-[5px]">years of experience</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="merriweather text-2xl text-[#f15221]">45</span>
                        <span className="max-w-[10ch] leading-[20px] mt-[5px]">types of activities</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="merriweather text-2xl text-[#f15221]">56</span>
                        <span className="max-w-[10ch] leading-[20px] mt-[5px]">countries available</span>
                    </div>
                </div>

                <div className="group w-[140px] [transform:translateZ(0)] py-[10px] rounded-full bg-[#f15221] overflow-hidden mt-[40px] text-center text-white
                relative before:absolute before:bg-[#fd7850] before:bottom-0 before:left-0 before:h-full before:w-full before:duration-500 cursor-pointer
                before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out">
                    <span className="relative z-0 transition ease-in-out duration-500 text-base font-semibold">Know more</span>
                </div>
            </div>

            <div className="video-window w-[600px] h-[400px] rounded-lg flex items-center justify-center">
                <RxTriangleRight className='p-[5px] rounded-full bg-white text-6xl text-[#333333] cursor-pointer hover:bg-[#d8d8d8] transition-colors duration-300' />
            </div>
        </div>
    )
}

export default AboutSection