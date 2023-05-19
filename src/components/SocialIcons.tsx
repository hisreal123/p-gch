
import { MdFacebook } from 'react-icons/md'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
import {Link} from 'react-router-dom'


export default function SocialIcons() {
  return (
    <>
      <div className=" hidden links md:flex md:space-x-3 relative justify-center">
        <Link to="/" className='bg-white block  w-fit rounded-full '> <AiOutlineTwitter /></Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <MdFacebook /> </Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <AiOutlineInstagram /> </Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <AiFillLinkedin /> </Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <AiFillLinkedin /> </Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <AiFillYoutube /> </Link>
        <Link to="/" className='bg-white block  w-fit rounded-full '> <SiTiktok /> </Link>
      </div>
    </>
  )
}
