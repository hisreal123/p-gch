import {  useContext } from 'react'
import { SideBarContext } from './context/SidebarContext'
import {SideBarNav} from "./Misc/Nav.tsx";
import {CgClose} from "react-icons/cg";
// import { motion } from 'framer-motion'

export default function Sidebar() {

  const { Open, setOpen } = useContext(SideBarContext)
  const toggleSideBar: any = () => setOpen(!Open)

  return (
    <div
      className="wrapper md:hidden transition ">
      <div

        className={Open ? " transition w-[85%] bg-slate-400 fixed top-0 bottom-0 right-0 shadow-lg z-[100]" : 'hidden '}>
        <SideBarNav  style='relative h-screen bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 w-full pt-20' liStyle=' inline-block hover:scale-105  p-2   ml-2 mt-3 text-xs w-full font-lighter opacity-2  ' />
      </div>

      {/* overlay */}
        <div className={Open ? "  absolute top-5 z-50 left-2"  : 'hidden '} onClick={toggleSideBar}>
            <CgClose className='text-white text-2xl'/>
        </div>
      <div className={Open ? " h-screen bg-black bg-opacity-50 z-10 fixed w-screen top-0 " : 'hidden '}></div>
    </div>
  )
}
