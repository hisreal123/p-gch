import {Link} from "react-router-dom";
import {BiChurch} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'


type SideBarNavProps = {
	style?: string
	liStyle?: string
}

export const SideBarNav = ({ liStyle, style }: SideBarNavProps) => {
	return <div className="">
		<ul className={` ${style}`}>

			<li>
				<Link to='/online' target="_blank" className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light`} >
                   <BiChurch  className='mr-3 text-lg'/>
					<p>Online</p>
				</Link>
			</li>
			<li>
				<Link to='/about' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light`} >
                   <BiChurch  className='mr-3 text-lg'/>
					<p>ABOUT</p>
				</Link>
			</li>
			<li>
				<Link to='/contact' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light`} >
					<CgProfile />
					<p >CONTACT US</p>
				</Link>
			</li>


			<li>
				<Link to='/care' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light`} >

					CARE
				</Link>
			</li>

			<li>
				<Link to='/give' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light `} >

					GIVE
				</Link>
			</li>
			<li>
				<Link to='/blog' className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300 font-light`}>

					BLOG
				</Link>
			</li>

		</ul>
	</div>
}
