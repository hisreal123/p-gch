import {Link} from "react-router-dom";

export type t = {
    img: string,
    title: string,
    link: string
}



export const CardComponents = ({img, title, link} :  t) => {
  return (
      <Link to={link} className='Card Main h-fit shadow-lg'>
          <div className='head  h-[180px] '>
              <img src={img}
                   alt="img-blur-shadow"
                   className=' object-fit h-full w-full object-cover
                  '/>
          </div>
          <div className='body h-fit py-5 text-xl text-center bg-gray-100 '>
              <h1 className=' w-[80%] mx-auto '>
              {title}
              </h1>
          </div>
      </Link>
  );
}