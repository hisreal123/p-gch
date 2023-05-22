import Banner from "../../components/Misc/Banner";
import { SideBarContext } from '../../components/context/SidebarContext'
import Sidebar from "../../components/Sidebar.tsx";
import Header from "../../components/Header.tsx";
import {useState} from "react";
// import ContactUs from "../../components/ContactUs.tsx";
// import More from "../../components/More.tsx";
// import Events from "../../components/Events.tsx";
import {CardComponents} from "../../components/HopeCards.tsx";
import {t} from "../../components/HopeCards.tsx";
import Events from "../../components/Events.tsx";
import {Link} from "react-router-dom";
import {BsPlay} from "react-icons/bs";
import More from "../../components/More.tsx";
import Footer from "../../components/Footer.tsx";
import Newsletter from "../../components/Newsletter.tsx";
// import {Believer} from "../../components/Modal/Believer.tsx";

const CardListProp: t[] = [
	{
		img: 'https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
		title: ' Get Inspired: Message Series',
		link: '/about'
	},{
		img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
		title: ' Get Inspired: Message Series',
		link: '/about'
	},{
		img: 'https://images.unsplash.com/photo-1499652848871-1527a310b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
		title: ' Get Inspired: Message Series',
		link: '/about'
	},{
		img: "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
		title: ' Get Inspired: Message Series',
		link: '/about'
	},
]

export const Home = () => {
	const [Open, setOpen] = useState(false)
	// const [openBeliever, setOpenBeliever] = useState(false);

	return (
		<>
			<section className='overflow-hidden relative'>
				<SideBarContext.Provider value={{ Open, setOpen }}>
					<Header ShowHeader={true}/>
					<Sidebar />
				</SideBarContext.Provider>
			<main className="w-screen overflow-hidden relative">
				<Banner />

				{/*Quote */}
				<div className="container mx-auto py-10 text-center  md:py-14 relative -z-50 md:w-3/4">
					<h2 className='mb-5 md:text-3xl font-bold'> WELCOME TO THE CHURCH</h2>
						<div className="welcomeMessage px-5 flex flex-col "><span className='text-4xl font-bold text-gray-500 md:text-6xl self-start '>
							&quot;</span>
							<p className='text-xs md:text-lg '>
								God has given us a mandate to raise role models, and He has indeed been faithful, backing our dedication and hard work with a great harvest of transformed lives. It is top priority for us that you partake of wholesome worship, edifying messages to build you up and positive interactions. We invite you to tour our website and get to know us a bit better - our service times, locations and membership. There are also links should you wish to support our ministry by giving. We look forward to having the pleasure of hosting you and your family soon, either in person at one of our campuses or virtually.
								In Christ, <b>Sam & Nike Adeyemi.</b>
							</p>
							<span className='text-4xl font-bold text-gray-500 md:text-6xl self-end '>
							&quot;</span>
					</div>
				</div>


				{/*Hope Section */}
				<section className='px-5 bg-red-400 py-10'>
					<div className='text-center'>
					<h1 className='text-xl md:text-3xl font-bold text-white '>HOPE FOR TODAY</h1>
					<span className='text-gray-200 text-sm  italic'> Inspiring  resources to become a better you </span>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-10 overflow-hidden'>
						{CardListProp.map((item, index) => {
							return (
							<CardComponents title={item.title}  img={item.img} key={index} link={item.link}/>
							)
						})}
					</div>
				</section>

				<Events />
				<h1></h1>


				{/*<more information />*/}

				<section className=''>
					<div>

					</div>


				<div className=' bg-blue-950 py-10 '>
					<div className='px-10 flex flex-col md:flex-row items-center justify-center space-x-10'>
						<Link className="" to="/">
							<img src='./assets/logo.png' height="120" width="120 " alt='logo'/>
						</Link>

						<a href='' className='bg-white hover:bg-gray-200 space-x-2 cursor-pointer rounded-full flex  items-center px-5 py-2 w-fit' >
							<BsPlay />
							<p className='text-sm  md:text-lg'>Click for more information</p>
						</a>
						</div>
				</div>

				</section>



				{/*Become a believer */}
				<section>
					{/*<Believer open={openBeliever} />*/}
					<div className=' bg-url md:px-10 px-2  h-[300px] w-full bg-gray-200/50'>
						<div className='flex flex-col md:flex-row md:justify-around items-center justify-center h-full  mx-auto bg-gray-200/50 '>
							<div className=''>
								<h1 className='md:text-4xl md:w-[50%] text-xl text-center
								md:text-left mb-2 md:mb-0'>Ready to begin this New Experience with Christ?</h1>
							</div>
							<div className='group'>
								<button className='text-sm px-3 py-2 md:px-5 md:py-4 rounded-full text-white font-bold
								md:text-xl bg-black md:group-hover:-translate-y-5 transition-all duration-200
								md:group-hover:text-gray-800 md:group-hover:bg-white '// onClick={() => setOpenBeliever(true)}
								>BECOME A BELIEVER</button>
							</div>
						</div>
					</div>
				</section>

				<More />
				<Newsletter />
			</main>
				<Footer ShowFooter={true} />
			</section>
		</>
	)
}