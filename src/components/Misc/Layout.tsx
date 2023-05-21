import {Outlet} from "react-router-dom";
import {SideBarContext} from "../context/SidebarContext.tsx";
import Sidebar from "../Sidebar.tsx";
import {useState} from "react";

export const Layout = () => {
	const [Open, setOpen] = useState(false)
	return (
		<>
			<main>
				<SideBarContext.Provider value={{ Open, setOpen }}>
					<Sidebar />
				</SideBarContext.Provider>
				<div><Outlet /></div>
			</main>
		</>
	)
}