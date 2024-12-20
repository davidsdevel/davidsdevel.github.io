//import {useMemo} from 'react';

//import Card from './asideCard';
//import Search from './asideSearch';
//import Categories from './asideCategories';
import Link from 'next/link';
import {socialMedia} from '@/lib/config'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Aside() {
  /*const _tags = useMemo(() => Object.entries(tags).filter(([, val]) => val), [tags]);
  const _cats = useMemo(() => Object.entries(categories).map(([name, value]) => {
    const capitalize = name.split(/\s+/).map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' ');

    return [
      capitalize,
      value
    ];
  }), [categories]);*/

  return <aside className='flex flex-col w-full border border-gray-500 bg-slate-50 py-8 items-center rounded-lg h-fit pb-24'>
    <div className='flex flex-col items-center' >
      <img src='https://lh3.googleusercontent.com/a/ACg8ocKYulmo-gd2aUozfyhlRlkRS8sNK6aiyv4DOuNImTTLt0sifvU=s96-c?size=160' className='rounded-full w-40 h-40'/>
      <div className='mt-4 mb-2'>
        <span className='font-bold text-sm text-main-700'>David Gonzalez</span>
      </div>
      <div>
        <span className='my-2 text-xl text-main-500'>Full Stack Developer</span>
      </div>
      <p className='mt-4 px-8 text-center'>Soy un desarrollador fullstack y marketer apasionado por aprender, crear, emprender y aportar tecnologicamente para el crecimiento</p>
      <ul className='flex justify-center items-center mt-8 gap-4'>
        {
          socialMedia.map(e => {
            return <li key={e.url}>
              <a href={e.url} target='_blank'>{e.ico}</a>
            </li>
          })
        }
      </ul>
    </div>
  </aside>; 
}