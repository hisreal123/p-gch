import VideoPlayer from "../../../components/VideoBackground.tsx";
import {Link} from "react-router-dom";
import {BiChevronLeft} from "react-icons/all";

export const ForgotPassword = () => {
	return (
		<>
			<section className='h-screen bg-no-repeat bg-cover relative'>
				<VideoPlayer videoUrl='https://player.vimeo.com/progressive_redirect/playback/803984073/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d4af689d552aeaf35bd63aa28035e02b6c97c5e1194c303377199e0050f660b9'/>

				<div className='absolute  top-0 bottom-0 bg-transparent left-0 right-0 flex justify-center  items-center'>
					<form className='flex flex-col space-y-1 items-center'>
						{/* logo here*/}
						<Link className="" to="/">
							<img src='../../assets/logo.png' height="100" width="120" alt='image' />
						</Link>
						<div className='flex flex-col space-y-10 '>
							<div className=''>
								<input
									type='email'
									name='fname'
									className=' border-b border-white bg-transparent placeholder:t placeholder:text-white text-white outline-none px-2 py-1'
									placeholder='ENTER EMAIL ... '/>
							</div>
						</div>


						<div className='py-1 flex w-full items-center'>
							<BiChevronLeft className='text-white  text-xl'/>
							<a href='/auth/register' className='text-white text-[9px]'>BACK</a>
						</div>

						<button
							className='bg-white hover:bg-gray-200 py-1 w-full '
						> LOGIN</button>

					</form>
				</div>
			</section>
		</>
	)
}