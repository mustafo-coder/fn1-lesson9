import { HeroImage } from '../images'
const Hero = () => {
    return (
        <header className='bg-primary'>
            <div className='container grid max-lg:grid-cols-1 items-center gap-10 py-28 grid-cols-2'>
                <div className='text-white max-lg:order-2'>
                    <h1 className='text-5xl font-bold max-sm:text-4xl max-w-[500px]'>Building stellar websites for early startups</h1>
                    <p className='max-w-[500px] mt-7 mb-10 max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div>
                        <a className='inline-block me-5 max-sm:px-7 max-sm:text-sm px-10 py-4 bg-[#FCD980] text-black rounded-full' href="/">View our work</a>
                        <a href="/" className='inline-flex items-center gap-5 max-sm:text-sm'>View Pricing <i className='fa fa-arrow-right-long'></i></a>
                    </div>
                </div>
                <div className='overflow-hidden max-lg:order-1 max-lg:mb-10'>
                    <img className='max-w-[638px] w-full object-contain' src={HeroImage} alt="hero image" />
                </div>
            </div>
        </header>
    )
}

export default Hero