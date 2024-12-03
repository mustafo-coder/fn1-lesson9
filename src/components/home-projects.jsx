import React from 'react'
import { Card1, Card2, Card3 } from '../images'

const HomeProjects = () => {
    return (
        <div className='container py-28'>
            <div className='sm:flex max-sm:text-center justify-between items-center'>
                <h2 className='max-sm:mb-5 max-sm:text-2xl font-bold text-4xl max-lg:text-3xl'>View our projects</h2>
                <a href="/" className='items-center max-sm:text-sm inline-flex gap-3'>View More <i className='fa fa-arrow-right-long'></i></a>
            </div>
            <div className='lg:flex gap-10 lg:h-[600px] mt-20'>
                <div className='w-full overflow-hidden relative project-item'>
                    <img className='w-full h-full object-cover' src={Card1} alt="card 1" />
                    <div className='absolute project-item__info pb-20 top-0 start-0 w-full h-full max-w-[400px] p-10 hidden flex-col justify-end text-white bg-gradient-to-t from-[#1C1E53] to-[#1c1e538e]'>
                        <h3 className='text-2xl'>Workhub office Webflow Webflow Design</h3>
                        <p className='mt-7 mb-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                        <a className='text-[#FCD980]' href="/">View project <i className='fa fa-arrow-right-long'></i></a>
                    </div>
                </div>
                <div className='lg:w-[400px] max-md:h-auto max-lg:h-[300px] max-lg:gap-5 max-lg:mt-5 flex-shrink-0 flex max-md:flex-col lg:flex-col justify-between h-full'>
                    <div className='relative project-item2 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Card2} alt="card2" />
                        <div className='absolute project-item__info top-0 start-0 w-full h-full max-w-[400px] p-10 hidden flex-col justify-end text-white bg-gradient-to-t from-[#1C1E53] to-[#1c1e538e]'>
                            <h3 className='text-2xl'>Workhub office Webflow Webflow Design</h3>
                            <p className='mt-7 mb-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                            <a className='text-[#FCD980]' href="/">View project <i className='fa fa-arrow-right-long'></i></a>
                        </div>
                    </div>
                    <div className='relative project-item2 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Card3} alt="card3" />
                        <div className='absolute project-item__info top-0 start-0 w-full h-full max-w-[400px] p-10 hidden flex-col justify-end text-white bg-gradient-to-t from-[#1C1E53] to-[#1c1e538e]'>
                            <h3 className='text-2xl'>Workhub office Webflow Webflow Design</h3>
                            <p className='mt-7 mb-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                            <a className='text-[#FCD980]' href="/">View project <i className='fa fa-arrow-right-long'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjects