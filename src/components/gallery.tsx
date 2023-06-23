import { BiChevronRight } from 'react-icons/bi'

const GallerySection: React.FC = () => {
    return (
        <div className="flex flex-col px-[120px] py-[120px] items-center">
            <span className="text-[#f15221] font-bold text-lg">GALLERY OF OUR TRIPS</span>
            <h1 className="merriweather text-5xl font-semibold mt-[10px] text-[#1a1a1a]">Completed journeys</h1>

            <div className="w-full mt-[40px] text-white">
                <section className="w-full h-[500px] rounded-2xl gallery-1 flex flex-col justify-end px-[60px] pb-[60px]">
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col gap-y-[5px]'>
                            <h3 className='text-4xl merriweather font-semibold'>Tekapo</h3>
                            <span className='text-xl'>A breathtaking landscape, located in New Zealand.</span>
                        </div>

                        <BiChevronRight className='text-5xl p-[5px] rounded-full ml-auto border border-white 
                        hover:bg-white hover:text-[#f15221] transition-colors duration-300' />
                    </div>
                </section>

                <div className="grid grid-cols-2 w-full gap-x-[20px] mt-[20px]">
                    <section className="w-full h-[500px] rounded-2xl gallery-2 flex flex-col justify-end px-[60px] pb-[60px]">
                        <div className='flex flex-row items-center'>
                            <div className='flex flex-col gap-y-[5px]'>
                                <h3 className='text-4xl merriweather font-semibold'>Martinsloch</h3>
                                <span className='text-xl'>Admire the charming landscapes of Switzerland.</span>
                            </div>

                            <BiChevronRight className='text-5xl p-[5px] rounded-full ml-auto border border-white
                            hover:bg-white hover:text-[#f15221] transition-colors duration-300' />
                        </div>
                    </section>

                    <section className="w-full h-[500px] rounded-2xl ml-auto gallery-3 flex flex-col justify-end px-[60px] pb-[60px]">
                        <div className='flex flex-row items-center'>
                            <div className='flex flex-col gap-y-[5px]'>
                                <h3 className='text-4xl merriweather font-semibold'>Tonadico</h3>
                                <span className='text-xl'>A peaceful mountain setting, found in Northern Italy.</span>
                            </div>

                            <BiChevronRight className='text-5xl p-[5px] rounded-full ml-auto border border-white
                            hover:bg-white hover:text-[#f15221] transition-colors duration-300' />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default GallerySection