


import VideoPlayer from '../VideoBackground'
import { motion as m } from 'framer-motion'
import {CiLocationOn} from 'react-icons/ci'
import {BsPlay} from 'react-icons/bs'
import { BannerPlace } from '../animation/animations';

export default function Banner() {
	return (
		<>
			<div className="wrapper h-screen overflow-hidden ">
				<div className="absolute flex items-center h-screen w-screen justify-center">
					<div className="wrap z-20">

						<div className="text text-white text-center ">
							<m.h1
								variants={BannerPlace}
								initial="hide"
								animate="show"
								transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
								className='text-4xl md:text-6xl font-light mb-5 md:mb-6 '>
								A PLACE FOR YOU
							</m.h1>
							<div className="desc mb-8 text-md md:text-2xl"> Join us this weekend </div>
						</div>

						<div className="btn flex flex-col space-y-4  justify-center items-center md:space-y-0 md:flex-row md:items-center  md:space-x-2 md:w-[500px] md:mx-auto ">
							<a href='' className=' bg-red-600 hover:bg-red-700 space-x-2 text-white cursor-pointer rounded-full flex  items-center px-5 py-2' >
								<CiLocationOn />
								<p>Find a Location</p>
							</a>
							<a href='' className='bg-red-600 hover:bg-red-700 space-x-2 text-white cursor-pointer rounded-full flex  items-center px-5 py-2' >
								<BsPlay />
								<p>Find a Location</p>
							</a>
						</div>
					</div>
				</div>
				<VideoPlayer />
			</div>
		</>
	)
}
