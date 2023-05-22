import {Link} from "react-router-dom";
import {BiChurch} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {
	BsPeople,
	CiLogin,
	FaBlog,
	GiHand,
}
	from "react-icons/all";


type SideBarNavProps = {
	style?: string
	liStyle?: string
	scrolled? : boolean
}

export const SideBarNav = ({ liStyle, style , scrolled }: SideBarNavProps) => {
	return <div className="">
		<ul className={` ${style}`}>

			<li>
				<Link to='/online' target="_blank" className={` ${scrolled ? 'text-black' : ' text-white'} ${liStyle} flex items-center opacity-70 hover:opacity-100 duration-300 font-light`} >
                   <BiChurch  className='mr-3'/>
					<p>Online</p>
				</Link>
			</li>
			<li>
				<Link to='/about' className={`  ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`} >
					<BsPeople className='mr-2' />
					<p>ABOUT</p>
				</Link>
			</li>
			<li>
				<Link to='/contact' className={` ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`} >
					<CgProfile className='mr-2' />
					<p >CONTACT US</p>
				</Link>
			</li>


			{/*<li>*/}
			{/*	<Link to='/care' className={` ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`} >*/}

			{/*		CARE*/}
			{/*	</Link>*/}
			{/*</li>*/}

			<li>
				<Link to='/give' className={` ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex   opacity-70 hover:opacity-100 duration-300 font-light `} >
					<GiHand className='mr-2' />
					GIVE
				</Link>
			</li>

			<li>
				<Link to='/blog' target="_blank" className={`  ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`}>
					<FaBlog className='mr-2' />
					BLOG
				</Link>
			</li>

			<li>
				<Link to='/auth/login'  className={`  ${scrolled ? 'text-black' : ' text-white'}  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`}>
					<CiLogin className='mr-2'/>
					Login
				</Link>
			</li>
		</ul>
	</div>
}
