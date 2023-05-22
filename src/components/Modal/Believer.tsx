import {CgClose} from "react-icons/cg";


type BelieverProps = {
	open: boolean
}

export const Believer = ({open} : BelieverProps) => {


	return (
		<>
			{
				open && (
				<section className='bg-white absolute bottom-0  right-10 left-10 z-20 '>
					<CgClose onClick={close}/>
					<div>
						<h1>Modal Welcome </h1>
					</div>
				</section>
				)}
		</>
	)
}