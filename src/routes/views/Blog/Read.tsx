import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../../redux/slices/Post.ts";
import { BiChevronLeft, FaRegFolderOpen, BsCalendar3, BsFillCupHotFill,  } from "react-icons/all";
import ShareLink from "../../../components/Misc/ShareLink";




export const Read = () => {
	const { title } = useParams();
	const posts = useSelector(selectAllPosts);

	const p: any | undefined = posts.find((post: any ) => post.title === title);
	// const a: any[] = posts.filter((post: any ) => post.title !== title);

	return (
		<>
			<main className='mt-[70px] bg-gray-200'>
				<section className='px-5 grid grid-cols-1 md:grid-cols-3 md:gap-5 md:w-[70%] mx-auto bg-white'>

					<div className='md:col-span-2'>
						{p ?
							(
								<div className='py-3'>
									<img src={p.image} alt='' className='w-full' />
									<h1 className='text-gray-700 font-bold my-5 text-2xl'>{p.title}</h1>

									<p className='flex items-center justify-around text-[10px] md:text-md space-x-2'>
										<span className='flex items-center'><FaRegFolderOpen className='mr-1 text-sm' />{p.author}
										</span>
															|
										<span className='flex items-center'><BsCalendar3 className='mr-2 text-sm' />
											{p.date}
										</span>|
										<span className='flex items-center'><BsFillCupHotFill className='mr-2 text-sm' />
											{p.readingTime}
										</span>
									</p>

									<div>
										<p className='text-sm md:text-md lg:text-md my-5 first-letter:text-md'>{p.content}</p>
									</div>

									<p className='text-xs md:text-sm mb-2'>Watch this live discussion here on our
										<a href={p.ytLink} className='border-b border-b-gray-300 ml-4'>YouTube Channel</a>
									</p>

									<div className='share border-t border-b border-gray-200 flex justify-between items-center py-5'>
										<h3 className=''>SHARE THE LOVE</h3>
										<div className='flex items-center space-x-1'>
											<ShareLink />
										</div>
									</div>

									<Link to={`/`} className=''>
										<span className='text-sm md:text-sm flex items-center border-b w-fit pb-1 mb-4 mt-10'><BiChevronLeft /> Other Post
										</span>
									</Link>
								</div>
							) :
							<>
								<h1>Loading!!!!</h1>
							</>
						}
					</div>

					<div className='right hidden md:block'>
						{/* tags */}
					</div>
				</section>
			</main>
		</>
	);
};
