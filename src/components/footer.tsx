import { BsTwitter, BsInstagram, BsLinkedin, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { TfiYoutube } from 'react-icons/tfi'
import { SiGlassdoor } from 'react-icons/si'

const FooterSection: React.FC = () => {
    const sections = [{
        title: 'DESTINATIONS', items: ['Europe', 'Asia', 'Africa', 'United States', 'Latin-America', 'Oceania']
    }, {
        title: 'ABOUT', items: ['About Us', 'Our Values', 'Diversity & Inclusion', 'Newsroom', 'Leadership']
    }, {
        title: 'GALLERY', items: ['Trip Photos', 'Community', 'Digital Core']
    }, {
        title: 'TESTIMONIALS', items: ['Reviews', 'Blog', 'Guides', 'Security']
    }, {
        title: 'CAREERS', items: ['Life at CoTravel', 'Open Roles']
    }]

    return (
        <div className="bg-[#232528] text-white flex flex-col pt-[40px]">
            <div className="grid grid-cols-7 pb-[80px] px-[120px]">

                <h2 className="relative before:absolute before:bg-[#f15221] before:bottom-0 before:left-0 before:h-full w-fit
                        before:w-full before:origin-bottom before:scale-y-[0.3] hover:before:scale-y-100 before:transition-transform 
                        before:ease-in-out before:duration-500 font-semibold text-3xl cursor-pointer h-fit merriweather">
                    <span className="relative">CoTravel</span>
                </h2>

                {sections.map((s, index) =>
                    <div key={index}>
                        <h3 className="text-[#c4c4c4] font-bold">{s.title}</h3>

                        <ul className="mt-[30px] font-semibold">
                            {s.items.map((i, indexItem) =>
                                <li key={indexItem} className="mt-[20px] text-sm hover:text-[#f15221] transition-colors duration-300 w-fit h-fit cursor-pointer">{i}</li>
                            )}
                        </ul>
                    </div>)}

                <div>
                    <h3 className="text-[#b8b8b8] font-bold">FOLLOW US</h3>

                    <div className="flex flex-col mt-[30px]">
                        <div className="flex flex-row text-white gap-x-[25px]">
                            <BsTwitter className='text-2xl cursor-pointer hover:text-[#f15221] transition-colors duration-300' />
                            <ImFacebook2 className='text-2xl cursor-pointer hover:text-[#f15221] transition-colors duration-300' />
                            <BsInstagram className='text-2xl cursor-pointer hover:text-[#f15221] transition-colors duration-300' />
                            <TfiYoutube className='text-2xl cursor-pointer hover:text-[#f15221] transition-colors duration-300' />
                            <BsLinkedin className='text-2xl cursor-pointer hover:text-[#f15221] transition-colors duration-300' />
                        </div>

                        <div className='flex flex-row mt-[30px] items-center ml-[-5px] cursor-pointer'>
                            <SiGlassdoor className='text-5xl text-[#f15221]' />

                            <div className='flex flex-col ml-[10px]'>
                                <div className='flex flex-row'>
                                    <BsStarFill className='text-[#f15221] text-lg' />
                                    <BsStarFill className='text-[#f15221] text-lg' />
                                    <BsStarFill className='text-[#f15221] text-lg' />
                                    <BsStarFill className='text-[#f15221] text-lg' />
                                    <BsStarHalf className='text-[#f15221] text-lg' />
                                </div>

                                <span className='mt-[5px] font-semibold text-sm'>78 REVIEWS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#131313] py-[15px] flex flex-row px-[120px]'>
                <span className='text-sm text-[#a1a1a1] font-semibold'>© Copyright - CoTravel 2024</span>

                <ul className='ml-auto text-sm flex flex-row gap-[80px] font-semibold text-[#e4e4e4]'>
                    <li className='cursor-pointer'>Cookie Notice</li>
                    <li className='cursor-pointer'>Privacy Policy</li>
                    <li className='cursor-pointer'>Terms & Conditions</li>
                    <li className='cursor-pointer'>Security & Compliance</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSection