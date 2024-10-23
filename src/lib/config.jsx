import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';

export const socialMedia = [
    {
      url: 'https://www.facebook.com/davidsdevel',
      ico: <BsFacebook className='w-8 h-8 text-gray-300 hover:text-[#1877f2]'/>
    },
    {
      url: 'https://twitter.com/davidsdevel',
      ico: <RiTwitterXLine className='w-8 h-8 text-gray-300 hover:text-[#000]'/>
    },
    {
      url: 'https://www.instagram.com/davidsdevel',
      ico: <BsInstagram className='w-8 h-8 text-gray-300 hover:text-[#c32aa3]'/>
    },
    {
      url: 'https://www.linkedin.com/in/davidsdevel',
      ico: <BsLinkedin className='w-8 h-8 text-gray-300 hover:text-[#0a66c2]'/>
    },
    {
      url: 'https://github.com/davidsdevel',
      ico: <BsGithub className='w-8 h-8 text-gray-300 hover:text-[#000]'/>
    }
];