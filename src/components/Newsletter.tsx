import { motion } from 'framer-motion'
import {useState} from "react";

// sendEmail console..


export default function Newsletter() {
    const [email, setEmail] = useState<string>('');
const handleSubmit = (e:any ) => {
    e.preventDefault()

    alert("Newsletters will be sent to " + email )
    alert(' Thanks for subscribing !!!')

}
    return (
        <>
            <section className='py-16 px-5'>
                <div
                    className='flex flex-col items-center justify-center relative '>
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 1, opacity: 1, type: ' ease-out' }}
                        transition={{ delay: .3, duration: .8 }}
                        className=' mb-5 text-center font-bold text-3xl lg:text-4xl lg:mb-10 '> Subscribe to our newsletter </motion.h1>

                    <form className='relative lg:flex lg:flex-col ' onSubmit={handleSubmit}>
                        <input type="email"
                               placeholder=' YOUR EMAIL *'
                               className=' relative w-full lg:min-w-[500px]  lg:m-auto mb-5  text-sm
                               px-4 py-2 hover:first-letter:border-red-300 border-2 outline-none'
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type='submit' className='lg:mt-10 self-center md:w-fit rounded-md bg-red-600 hover:bg-red/60  px-4 py-3 w-full mt-4 mb-5 md:text-white lg:px-10 hover:bg-red-800 md:font-light '> SUBSCRIBE </button>
                    </form>
                </div>
            </section>
        </>
    )
}
