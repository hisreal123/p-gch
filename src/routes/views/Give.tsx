import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ABanner from "../../components/ABanner.tsx";

export const Give = () => {
	return (
		<>
			<Header ShowHeader={true} />
			<main className=''>
				<ABanner caption=''>
					<div className='w-[80%] mx-auto flex flex-col translate-y-40 ' >
						<h1 className='text-orange-700 italic  underline'>Giving; </h1> <h1>a joyfull response to a life changed by the gospel. </h1>
					</div>
				</ABanner>


				{/*Local transfers*/}
				<div className='py-20 flex flex-col  items-center bg-white'>
					<h1 className=' text-lg md:text-3xl font-bold text-gray-800'>Online Giving - Local</h1>
					<p className='my-4'>  Simple and secure giving using wired transfers, your debit or credit card</p>


					<div className='flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0'>
						<a
							href='#'
							className='px-2 py-2 bg-blue-800 rounded-sm text-white
							border-blue-800  text-xs md:text-sm font-bold hover:bg-white hover:shadow-md  hover:border hover:text-gray-800 transition-all w-fit'
						> PAY WITH CARD</a>
						<a
							href='#'
							className='px-2 py-2 bg-blue-800 rounded-sm text-white
							 border-blue-800  text-xs md:text-sm font-bold transition-all w-fit
							hover:bg-white hover:shadow-md  hover:border hover:text-gray-800 border'
						>LOCAL TRANSFERS</a>
					</div>

				</div>


				{/*International Transfers*/}
				<div className='py-20 flex flex-col  items-center bg-gray-400/20'>
					<h1 className=' text-lg md:text-3xl font-bold text-gray-800'>International Giving</h1>
					<p className='my-4'> Convenients ways to give using wired transfers, credit and debit cards</p>


					<div className='flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0'>
						<a
							href='#'
							className='px-2 py-2 bg-blue-800 rounded-sm text-white
							border-blue-800  text-xs md:text-sm font-bold hover:bg-white hover:shadow-md  hover:border hover:text-gray-800 transition-all w-fit'
						> PAY WITH CARD</a>
						<a
							href='#'
							className='px-2 py-2 bg-blue-800 rounded-sm text-white
							 border-blue-800  text-xs md:text-sm font-bold transition-all w-fit
							hover:bg-white hover:shadow-md  hover:border hover:text-gray-800 border'
						>TRANSFERS DETAILS</a>
					</div>

				</div>
			</main>
			<Footer ShowFooter={true} />
		</>
	)
}