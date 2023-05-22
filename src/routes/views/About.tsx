import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ABanner from "../../components/ABanner.tsx";

export const About = () => {
	return (
		<>
			<Header ShowHeader={true} />
			<main className=''>
				<ABanner caption='About Us' />
					<h1> About found </h1>
				<Footer ShowFooter={true} />
			</main></>
	)
}