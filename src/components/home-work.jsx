import {Pointer1, Pointer2, Pointer3, Pointer4} from '../images'

const works = [
    {
        id: 1,
        title: 'Strategy',
        body: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
        src: Pointer1,
    },
    {
        id:2,
        title: 'Wireframing',
        body: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
        src: Pointer2,
    },
    {
        id: 3,
        title: 'Design',
        body: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
        src: Pointer3,
    },
    {
        id: 4,
        title: 'Development',
        body: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
        src: Pointer4,
    },
]

const HomeWork = () => {
    return (
        <div className="bg-[#F4F6FC]">
            <div className="container py-28 gap-5 lg:flex justify-between">
                <div>
                    <h2 className="font-semibold text-4xl max-sm:text-3xl">How we work</h2>
                    <p className="max-w-[300px] text-sm text-slate-500 my-4 max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="/" className="text-[#2405F2] font-semibold flex items-center gap-3">
                        Get in touch with us
                        <i className="fa fa-arrow-right-long"></i>
                    </a>
                </div>
                <div className="grid sm:grid-cols-2 gap-7 max-lg:mt-10 lg:max-w-[600px]">
                    {works.map(w => (
                        <div className='max-sm:flex flex-col items-center max-sm:text-center' key={w.id}>
                            <img src={w.src} alt={w.title} />
                            <h3 className='font-semibold my-4 text-xl'>{w.title}</h3>
                            <p className='text-sm text-slate-500'>{w.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeWork