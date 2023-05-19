import {Link} from 'react-router-dom'


const MoreSection2Data = [
    {
        imgSrc: 'https://plus.unsplash.com/premium_photo-1678752719159-b756eeb2d2e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '/about',
        alt: 'first '

    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '/',
        alt: 'second '

    },
    {
        imgSrc: 'https://plus.unsplash.com/premium_photo-1664006989021-4628d0604c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '/',
        alt: 'third '

    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1424115087662-5845efc6b366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Services',
        desc: ' The best place to start connecting with God at Daystar is in our Services.',
        hrefTitle: ' Service Time',
        href: '/',
        alt: 'forth '

    },
]
export default function More() {
    return (
        <>
            <section className='px-5 py-20'>
                {/* More info */}
                {/* What Gof can do through you   */}
                <div className="mt-20 px-5 grid grid-cols-1 gap-5 md:grid-cols-4" >
                    {
                        MoreSection2Data.map((data, index) => (
                            <>
                                <div className="wrap relative flex flex-col justify-center  " key={index}>
                                    <div className="relative rounded-full overflow-hidden shadow-2xl lg:h-40 lg:w-40 lg:self-center">
                                        <img
                                            src={data.imgSrc}
                                            alt={data.alt}
                                            className='object-cover h-full relative  '
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h1 className="my-4 font-bold text-lg md:text-xl">{data.title}</h1>
                                        <p className="my-4">{data.desc}</p>
                                        <Link to={data.href} className="text-red-400 hover:underline hover:font-bold hover:scale-105 hover:text-red-700 ">{data.hrefTitle}</Link>
                                    </div>
                                </div >
                            </>
                        ))
                    }
                </div>
            </section >
        </>
    )
}
