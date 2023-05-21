import {Link} from 'react-router-dom'


import {
    fbColor,
    twitterColor,
    igColor,
    ytColor
} from './SvgIcons/SvgIcons'

type FooterProps = {
    ShowFooter : boolean
}

export default function Footer({ShowFooter} : FooterProps) {
    return (
        <>
            {ShowFooter
                    && (
            <section className='bg-gray-800 text-white/70  py-2 md:py-10 px-5 '>
                <div className='md:w-[80%] md:mx-auto'>
                    <footer className="relative w-full ">
                        <div className="relative md:flex justify-between md:mb-20">
                            <div className=' hidden md:flex flex-col space-y-1 mb-10 md:mb-0 '>
                                <h2 className='text-3xl font-light mb-2'>About</h2>
                                <Link to="/">Vision</Link>
                                <Link to="/">Core Values</Link>
                                <Link to="/">Academy</Link>
                                <Link to="/">History</Link>
                                <Link to="/">Leadership</Link>
                            </div>
                            <div className=' hidden md:flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Connect</h2>
                                <Link to="/">Locations</Link>
                                <Link to="/">Home Fellowship</Link>
                                <Link to="/">Events</Link>
                                <Link to="/">StarHun</Link>
                                <Link to="/">Junior Church </Link>
                            </div>
                            <div className='hidden md:flex  flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Watch</h2>
                                <Link to="/">Online Church </Link>
                                <Link to="/">Sermons</Link>
                                <Link to="/">Reflexion</Link>
                                <Link to="/">Worship</Link>
                                <Link to="/">Community impact </Link>
                            </div>
                            <div className='hidden md:flex  flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Care</h2>
                                <Link to="/">Ministries </Link>
                                <Link to="/">Fellowship</Link>
                                <Link to="/">Service units</Link>

                            </div>
                            <div className=' hidden md:flex  flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2' >Give</h2>
                                <Link to="/">Giving </Link>
                                <Link to="/">Encouraging Story</Link>
                                <Link to="/">Giving Impact</Link>
                                <Link to="/">Giving Option</Link>
                            </div>
                        </div>
                    </footer>
                    <footer className='media w-full relative '>
                        <div className="links md:flex space-x-5 w-full justify-center flex ">
                            <Link to="/" className='bg-white block  w-fit p-1 rounded-full mt-1'>{fbColor}</Link>
                            <Link to="/" className='bg-white block  w-fit p-1 rounded-full mt-1'>{twitterColor}</Link>
                            <Link to="/" className='bg-white block  w-fit p-1 rounded-full mt-1'>{igColor}</Link>
                            <Link to="/" className='bg-white block  w-fit p-1 rounded-full mt-1'>{ytColor}</Link>
                        </div>
                    </footer>
                    <footer className="bottom text-center  md:text-right ">
                        <div className="legal text-[6px] md:text-xs mt-1 ">
                            <span> © 2023 All rights reserved </span>
                            <a> License </a>
                            <a> Terms </a>
                            <a> Privacy </a>
                        </div>
                    </footer>
                </div>
            </section>
                )}
        </>
    )
}
