import {Outlet} from "react-router-dom";
import Header from "../Header.tsx";
import {SideBarContext} from "../context/SidebarContext.tsx";
import Sidebar from "../Sidebar.tsx";
import {useState} from "react";
import Footer from "../Footer.tsx";

export const Layout = () => {
	const [Open, setOpen] = useState(false)
	return (
		<>
			<main>
				<SideBarContext.Provider value={{ Open, setOpen }}>
					<Header />
					<Sidebar />
				</SideBarContext.Provider>
				<div><Outlet /></div>
				<Footer />
			</main>
		</>
	)
}