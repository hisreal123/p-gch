"use client"
import { BannerPlace } from './animation/animations';

//animation
import { motion as m } from 'framer-motion'



type ABanner  = 
{
    caption : string
    children?: React.ReactNode
    bgImg ?: string
}
export default function ABanner({caption, children, bgImg} : ABanner) {
    return (
        <>
            <section className={`
            ${bgImg ? `bg-[url(${bgImg})]` : "bg-[url('/assets/about.jpg')]"} bg-fixed bg-cover bg-no-repeat bg-bottom h-[500px] flex justify-center items-center `}>
                <div className='px-3 md:px-5'>
                    <m.h1
                        variants={BannerPlace}
                        initial="hide"
                        animate="show"
                        transition={{ duration: 4, scale: '105', type: "spring", stiffness: 100 }}
                        className='text-3xl  text-white font-bold md:text-4xl'>{caption}</m.h1>
                    <m.h1
                        variants={BannerPlace}
                        initial="hide"
                        animate="show"
                        transition={{ duration: 4, scale: '105', type: "spring", stiffness: 100 }}
                        className='text-3xl  text-white font-bold md:text-4xl'
                    >
                        {children}
                    </m.h1>
                </div>
            </section>
        </>
    )
}
