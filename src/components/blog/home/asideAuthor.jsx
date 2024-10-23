import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEarthAmericas} from 'react-icons/fa6';
import Link from 'next/link';

export default function Author({name, lastname, photo, ocupation, description, facebook, twitter, linkedin, instagram, website}) {
  return <>
    <hr className='w-3/4 my-8'/>
    <div
      className='
      flex
      flex-col
      items-center'
    >
      <img src={photo + '?w=165&h=165&q=50'} className='rounded-full w-40 h-40'/>
      <div className='mt-4 mb-2'>
        <span className='font-bold text-sm text-main-700'>David Gonzalez</span>
      </div>
      <div>
        <span className='my-2 text-xl text-main-500'>Full Stack Developer</span>
      </div>
      <p className='mt-4 px-8 text-center'>{description}</p>
      <div className='flex margin-auto justify-between w-2/3 mt-8'>
        <Link target='_blank' href='https://www.facebook.com/davidsdevel'>
          <FaFacebook height='28'/>
        </Link>
        <Link target='_blank' href='https://www.twitter.com/davidsdevel'>
          <FaTwitter height='28'/>
        </Link>
        <Link target='_blank' href='https://www.instagram.com/davidsdevel'>
          <FaInstagram height='28'/>
        </Link> 
        <Link target='_blank' href='https://www.linkedin.com/in/davidsdevel'>
          <FaLinkedin height='28'/>
        </Link>
      </div>
    </div>
  </>;
}
