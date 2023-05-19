import {Link} from "react-router-dom";
import {FaRegFolderOpen} from 'react-icons/fa'
import {BsCalendar3} from 'react-icons/bs'
import {BsFillCupHotFill} from 'react-icons/bs'
import {BiChevronRight} from "react-icons/all";


export const PostCard = ({post}: any) => {
	return (
		<>

			<div className=' border mb-5 bg-white hover:bg-gray-100 justify-between h-fit '>
				<div className='top'>

				<div className=''>
					<Link to={`/read/${post.title}`}>
						<img src={post.image}  className=' h-[200px] w-full relative object-cover' alt='post image ' />
					</Link>
					</div>
				<div className=' px-3 py-3'>
					<div>
						<Link to={`/read/${post.title}`}>
							<h1 className='text-gray-700 font-bold  text-xl mb-2 '>{post.title}.</h1>
						</Link>

						<p className='flex items-center justify-around text-[10px] md:text-md space-x-2 '>
							<Link to={`/read/${post.title}`} className='flex items-center'>
								<FaRegFolderOpen className=' mr-1 text-sm '/>
								{post.author}
							</Link>
						|
							<span className='flex  items-center'>
								<BsCalendar3 className='mr-2 text-sm'/>
								{post.date}
							</span>|
							<span className='flex  items-center'>
								<BsFillCupHotFill className='mr-2 text-sm'/>
								{post.readingTime}
							</span>
						</p>

						<div>
							<p className='text-sm  md:text-md lg:text-md line-clamp-6 my-5 first-letter:text-md '>{post.content}</p>
						</div>
				</div>

						<Link to={`/read/${post.title}`}  className=''>
							<span className='text-xs md:text-sm flex items-center border-b w-fit  pb-1'>Continue Reading
							<BiChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}