import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

// import Layout from "../components/Misc/Layout";

import {Home} from "../routes/views/Home";
import ContactUs from "../routes/views/ContactUs";
import {ErrorRoute} from "../routes/views/Error";
import {About} from "../routes/views/About";
// import {Watch} from "../routes/views/Watch";
// import {Care} from "../routes/views/Care";
import {Give} from "../routes/views/Give";
import {Blog} from "../routes/views/Blog";


import {Layout} from "../components/Misc/Layout.tsx";

// Blog nexted
import {Bulletin} from "../routes/views/Blog/Bulletin";
import {BlbleReading} from "../routes/views/Blog/BlbleReading";
import {Read} from "../routes/views/Blog/Read.tsx";


// Online
import {Online} from "../routes/views/Online/Online.tsx";
import {Login} from "../routes/views/Auths/Login.tsx";
import {Register} from "../routes/views/Auths/Register.tsx";
import {ForgotPassword} from "../routes/views/Auths/ForgotPassword.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorRoute />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/online",
				element: <Online />,
			},
			{
				path: "/contact",
				element: <ContactUs />,
			},{
				path: "/auth/login",
				element: <Login />,
			},{
				path: "/auth/register",
				element: <Register />,
			},{
				path: "/auth/reset/forgot",
				element: <ForgotPassword />,
			},
			// {
			// 	path: "/watch",
			// 	element: <Watch />,
			// },
			// {
			// 	path: "/care",
			// 	element: <Care />,
			// },
			{
				path: "/give",
				element: <Give />,
			},

			// Blog Router
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
						path: "/blog/read/:title",
						element: <Read />,
					},
		]

	}
]);



const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
