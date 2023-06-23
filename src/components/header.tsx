import { MdTravelExplore } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'

const HeaderLandscape: React.FC = () => {
    return (
        <div className="w-full h-screen header-bg">
            <nav className="flex flex-row text-white py-[60px] px-[60px] md:px-[30px] lg:px-[60px] items-center">
                <div className='flex flex-row items-center group hover:scale-105 transition-transform duration-300 z-50'>
                    <MdTravelExplore className='text-4xl text-[#f15221]' />
                    <span className="font-semibold text-2xl cursor-pointer ml-[10px] mb-[3px]">
                        CoTravel
                    </span>
                </div>

                <ul className="hidden flex-row md:gap-[20px] lg:gap-[40px] xl:gap-[60px] ml-auto font-semibold lg:text-lg md:flex">
                    <li className="cursor-pointer relative after:absolute after:bg-[#f15221] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Destinations</li>
                    <li className="cursor-pointer relative after:absolute after:bg-[#f15221] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">About us</li>
                    <li className="cursor-pointer relative after:absolute after:bg-[#f15221] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Gallery</li>
                    <li className="cursor-pointer relative after:absolute after:bg-[#f15221] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Testimonials</li>
                    <li className="cursor-pointer relative after:absolute after:bg-[#f15221] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Careers</li>
                    <li className="group hover:text-[#f15221] transition ease-in-out duration-200 cursor-pointer z-50">
                        Sign in
                        <span className="ml-[5px] inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">→</span>
                    </li>
                </ul>

                <HiMenu className='flex md:hidden ml-auto text-4xl hover:text-[#f15221] z-50 transition-all duration-300' />
            </nav>

            <div className="flex flex-col text-white md:ml-[80px] mt-[120px] xl:mt-[120px] text-center md:text-left items-center md:items-start">
                <h1 className="text-4xl md:text-6xl font-semibold max-w-[17ch] md:w-[640px] merriweather leading-[75px] z-50">
                    Explore the world with exciting people
                </h1>

                <span className="mt-[20px] md:mt-[40px] text-lg md:font-semibold z-50">We help people find ideal joint trip company</span>

                <div className="group w-[200px] [transform:translateZ(0)] px-6 py-3 rounded-full bg-[#f15221] overflow-hidden mt-[40px] text-center
                relative before:absolute before:bg-[#fd7850] before:bottom-0 before:left-0 before:h-full before:w-full before:duration-500 cursor-pointer
                before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out">
                    <span className="relative z-0 transition ease-in-out duration-500 text-xl font-semibold">Start</span>
                </div>
            </div>

            <div className="hidden flex-row text-white lg:px-[80px] xl:px-[120px] gap-x-auto lg:mt-[140px] xl:mt-[200px] lg:flex">
                <div className="flex flex-col gap-y-[10px] z-50">
                    <span className="text-3xl font-semibold merriweather">01</span>
                    <h3 className="text-xl font-semibold">Choose place, activity and time</h3>
                    <p className="text-lg w-[340px]">Everyone can choose a route and activity according to his taste and possibilities.</p>
                </div>

                <div className="flex flex-col gap-y-[10px] ml-auto z-50">
                    <span className="text-3xl font-semibold merriweather">02</span>
                    <h3 className="text-xl font-semibold">Find people who have the same travel plans</h3>
                    <p className="text-lg w-[380px]">You can find people with the same interest, who know the routes you've never travelled.</p>
                </div>

                <div className="hidden xl:flex flex-col gap-y-[10px] ml-auto z-50">
                    <span className="text-3xl font-semibold merriweather">03</span>
                    <h3 className="text-xl font-semibold">Start chat and offer to go on a joint adventure</h3>
                    <p className="text-lg w-[400px]">Discuss the details of your trip and have a great time! You might find a great friend for life.</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderLandscape