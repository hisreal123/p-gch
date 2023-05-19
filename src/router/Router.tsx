import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

// import Layout from "../components/Misc/Layout";

import {Home} from "../routes/views/Home";
import ContactUs from "../routes/views/ContactUs";
import {ErrorRoute} from "../routes/views/Error";
import {About} from "../routes/views/About";
import {Connect} from "../routes/views/Connect";
import {Watch} from "../routes/views/Watch";
import {Care} from "../routes/views/Care";
import {Give} from "../routes/views/Give";
import {Blog} from "../routes/views/Blog";

import {Layout} from "../components/Misc/Layout.tsx";

// Blog nexted
import {Bulletin} from "../routes/views/Blog/Bulletin";
import {BlbleReading} from "../routes/views/Blog/BlbleReading";
import {Read} from "../routes/views/Blog/Read.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorRoute />,

		children: [
			{
				path: "/",
				element: <Home />,
			},{
				path: "/about",
				element: <About />,
			},
			{
				path: "/connect",
				element: <Connect />,
			},
			{
				path: "/contact",
				element: <ContactUs />,
			},
			{
				path: "/watch",
				element: <Watch />,
			},
			{
				path: "/care",
				element: <Care />,
			},
			{
				path: "/give",
				element: <Give />,
			},
			{
				path: "/blog",
				element: <Blog />,

				children: [
					{
						path: "/blog/bulletin",
						element: <Bulletin />,
					},
					{
						path: "/blog/bibleReading",
						element: <BlbleReading />,
					},
				]
			},
			{
				path: "/read/:title",
				element: <Read />,
			},
		]

	}
]);



const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
