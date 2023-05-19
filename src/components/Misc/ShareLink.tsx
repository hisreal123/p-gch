import {ImFacebook, ImInstagram, ImPinterest, ImTwitter, ImWhatsapp} from "react-icons/all";

interface ShareIcon {
	id: number;
	icon: JSX.Element;
	link: string;
}

const ShareIconsData: ShareIcon[] = [
	{
		id: 1,
		icon: <ImTwitter className='group-hover:text-blue-700' />,
		link: '#'
	},
	{
		id: 2,
		icon: <ImFacebook className='group-hover:text-blue-700' />,
		link: '#'
	},
	{
		id: 3,
		icon: <ImInstagram className='group-hover:text-red-700' />,
		link: '#'
	},
	{
		id: 4,
		icon: <ImWhatsapp className='group-hover:text-green-700' />,
		link: '#'
	},
	{
		id: 5,
		icon: <ImPinterest className='group-hover:text-red-700' />,
		link: '#'
	},
];

const ShareLink = () => {
	return (
		<>
			{ShareIconsData.map((icon: ShareIcon) => (
				<div className='flex group' key={icon.id}>
					<a href={icon.link} className='h-8 w-8 flex items-center justify-center rounded-full border'>{icon.icon}</a>
				</div>
			))}</>
	)
}

export  default  ShareLink
