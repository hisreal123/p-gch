import {SideBarNav} from "./Misc/Nav.tsx";
import { useState, useEffect, useContext } from 'react'
import { SideBarContext } from './context/SidebarContext'
import { AiOutlineMenu } from 'react-icons/ai'
import {Link} from "react-router-dom";






/* Header will be an option between all pages,
 ShowHeader will be a props passed to all parent component
 if ShowHeader is true, Header will be displayed in the component and otherwise.


 Same applies for Footer
 */
type HeaderProps = {
  ShowHeader : boolean
}


export default function Header({ShowHeader} : HeaderProps) {

  const [scrollY, setScrollY] = useState(0)
  const { Open, setOpen } = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const backgroundColor = scrollY > 100 ? 'bg-white shadow-lg' : 'transparent';
  const menuChange = scrollY > 100  ? 'text-black' : 'text-white';


  return (
      <>
      {ShowHeader && (
      <div className={` ${backgroundColor} transition h-20 transparent fixed w-full drop-shadow-lg z-30 top-0 `}>
        <div className="px-1 md:px-10 h-full mx-auto flex justify-between items-center">

                  {/* logo here*/}
                  <Link className="" to="/">
                    <img src='./assets/logo.png' height="100" width="120" />
                  </Link>

                  {/* menu Links */}
                  <SideBarNav
                      style='hidden px-10 py-16 bg-gray-800 z-10
                        md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6'
                      liStyle='md:text-xs' />

          <div className="flex items-center md:hidden">
            <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
              onClick={toggleSideBar}>
              <AiOutlineMenu className={menuChange}/>
            </button>
          </div>
        </div>
      </div>
        )}
      </>
  )
}
