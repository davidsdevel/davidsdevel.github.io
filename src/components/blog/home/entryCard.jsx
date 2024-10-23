'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {FaComments, FaShare} from 'react-icons/fa';
import {CiShare1} from 'react-icons/ci';
import ShareButtons from '../shareButtons';

export default function EntryCard({title, thumbnail, description, author, tags, comments, slug}) {
  const [showShare, setShowShare] = useState(false);
  const router = useRouter();

  return <div className='flex flex-col my-16 md:w-3/4 lg:w-full lg:flex-row-reverse relative gap-2'>
    <div className='flex flex-col lg:w-2/3'>
      <div className='flex flex-col'>
        <Link href={`/blog/${slug}`}>
          <div className='w-full h-32 lg:h-48 bg-cover bg-center rounded-lg mb-4 hover:bg-[110%]' style={{backgroundImage: `url(${thumbnail}&h=200&q=50)`}}/>
        </Link>
        <h3 className='px-1 text-lg text-main-1 font-bold'>{title}</h3>
      </div>
      <p className='py-3 mt-4 flex-grow'>{description}</p>
      <div className='hidden lg:flex items-center mt-4 gap-4'>
        <button className='flex-grow transition-all duration-150 ease cursor-pointer w-full border border-solid border-main-500 py-2 text-main-500 rounded-full hover:text-white hover:bg-accent-1 hover:border-accent-1' onClick={() => router.push(`/blog/${slug}`)}>Ver Más</button>
        <button className='cursor-pointer flex items-center justify-center' onFocus={() => setShowShare(true)} onBlur={() => setShowShare(false)}>
          <CiShare1 className='text-[#362e6f] w-6 h-6'/>
        </button>
      </div>
    </div>
    <div className='lg:flex lg:flex-col-reverse lg:justify-between lg:w-1/3'>
      <div className='flex justify-between items-end my-4 lg:flex-col lg:m-0'>
        <div className='flex items-center lg:hidden'>
          <FaComments height='20' fill='#362e6f'/>
          <span className='ml-2'>0</span>
        </div>
        <div className='flex flex-row-reverse items-end lg:px-4 lg:items-center'>
          <div className='w-12 h-12 bg-cover bg-center rounded-full shrink-0' style={{backgroundImage: `url(https://lh3.googleusercontent.com/a/ACg8ocKYulmo-gd2aUozfyhlRlkRS8sNK6aiyv4DOuNImTTLt0sifvU=s96-c?size=50)`}}/>
          {/*<h4 className='mx-2 text-sm'>{author?.name} {author?.lastname}</h4>*/}
          <h4 className='mx-2 text-sm'>David Gonzalez</h4>
        </div>
      </div>
      <ul className='flex flex-wrap'>
        {
          tags.map((e, i) => <li className='bg-main-500 rounded-md m-1 px-2 text-white' key={e + i}>{e}</li>)
        }
      </ul>
      <div className='lg:hidden flex items-center mt-4 justify-between gap-4'>
        <button className='transition-all duration-150 ease cursor-pointer w-full border mr-4 border-solid py-2 text-main-1 rounded-full hover:text-white hover:bg-accent-1 hover:border-accent-1' onClick={() => router.push(`/blog/${slug}`)}>Ver Más</button>
        <button className='cursor-pointer flex items-center justify-center' onFocus={() => setShowShare(true)} onBlur={() => setShowShare(false)}>
          <CiShare1 className='text-[#362e6f] w-6 h-6'/>
        </button>
      </div>
    </div>
    <ShareButtons show={showShare} title={title} url={slug}/>
  </div>;
}