// import Newsletter from './Newsletter'

import {MdLocationOn} from "react-icons/all";
import ABanner from "../../components/ABanner.tsx";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";

export default function ContactUs() {
    return (
        <>
            <section className='w-full '>
                <Header ShowHeader={true} />
                 <ABanner caption='Contact Us'/>

                <div className=" px-10 py-4 bg-white ">

                    <div className='text-center md:w-[70%] mx-auto '>
                        <div className='py-10'>
                            <h1 className='font-bold text-gray-800 text-2xl md:text-4xl '>Welcome To GodsChamber </h1>
                            <h1 className='font-bold text-gray-800 text-2xl md:text-4xl '>International Christian Centre</h1>
                        </div>

                        <p className='text-left md:text-lg'>
                            On the 13th of December, 2003, the world saw the birth of the great change agent – The Harvesters dream; a divine vision, given to Pastor Bolaji Idowu, started off with just a handful of people.

                            Over the years, proving that with faith, determination, focus and the right team, anything is possible, what started with just a roomful of people has grown to be the most desirable place of worship. With locations across Nigeria, the United Kingdom and the United States of America, Harvesters attracts over 70,000 worshippers both online and onsite.
                        </p>

                    </div>

                    <form action="" className=' flex flex-col md:flex-row bg-white px-4 '>
                        <div className='  md:w-[90%] md:mx-auto md:flex md:flex-col py-20 md:items-center bg-white '>
                            <div className=" relative w-full md:w-[80%] ">
                                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 w-full mb-3'>
                                    <input type="text" placeholder='YOUR NAME *' className=' border p-2' />
                                    <input type="email" placeholder=' YOUR EMAIL *' className=' border p-2' />
                                </div>
                                    <input type="text" placeholder=' SUBJECT*' className=' border p-2 w-full mb-4' />

                                <textarea placeholder='YOUR MESSAGE' className=' border p-2 w-full' rows={4} />
                            </div>

                            <button type='submit' className='rounded-md bg-blue-800 text-white  px-4 py-2 mt-5 hover:bg-blue-950 '>SEND MESSAGE</button>
                        </div>
                    </form>

                </div>

                {/*Pastors*/}
                <div>
                {/*    pastors grid comes in here */}


                </div>


             <div className='locate flex flex-col justify-center items-center py-6 bg-gray-800 mb-[1px] space-x-4 space-y-4 text-center px-3 '>
                 <h1 className='font-bold text-xl text-white '> Locate a small group </h1>
                 <p className='text-gray-300 text-xs'> The Small Group allows  members to connect on a more intimate level</p>

                 <button className='px-4 py-3 flex items-center  text-xs md:text-sm font-bold text-white  bg-gray-700   rounded-sm '>
                     <MdLocationOn />
                     LOCATE SMALL GROUP
                 </button>
             </div>
                <Footer ShowFooter={true} />
            </section>
        </>
    )
}
