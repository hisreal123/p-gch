import {  selectAllPosts } from "../../redux/slices/Post";
import { useSelector } from "react-redux";
import {PostCard} from "../../components/Misc/PostCard.tsx";
// import { useEffect } from "react";

export const Blog = () => {
	// const dispatch = useDispatch();

	const posts = useSelector(selectAllPosts)
	console.log(posts);

	return (
		<>
			<main className="mt-[70px] px-10  ">
				<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-5 md:gap-y-0'>
					{posts.map((post) => {
						return (
							<PostCard post={post} />
						)
					})}
				</section>
			</main>
		</>
	);
};