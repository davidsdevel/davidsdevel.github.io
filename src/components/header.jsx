import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';

const socialMedia = [
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
]

export default function Header() {
  return <header className="">
    <div className="px-4 py-32 w-full flex flex-col md:items-center md:py-60">
      <h2 className='text-7xl font-bold text-main-1 md:text-center'>Hola, soy David Gonz&aacute;lez</h2>
      <p className='text-2xl mt-4'>Desarrollador Full-Stack, en tecnologia JavaScript</p>
      <ul className='flex justify-center items-center mt-4 gap-4'>
        {
          socialMedia.map(e => {
            return <li key={e.url}>
              <a href={e.url} target='_blank'>{e.ico}</a>
            </li>
          })
        }
      </ul>
    </div>
    <div className='w-full flex flex-col items-center -mb-2 px-12 md:px-12'>
      <img src='/assets/dev.svg' alt='' className='w-full max-w-3xl'/>
    </div>
  </header>
}