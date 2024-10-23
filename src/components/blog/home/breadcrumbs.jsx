import {FaAngleDoubleRight, FaHome} from 'react-icons/fa';
import {CiHome} from 'react-icons/ci';
import Link from 'next/link';

export default function Breadcrumbs({title, main}) {
  return <div className='bg-main-1 py-4 flex w-full bottom-0 items-center px-4 md:px-8 lg:px-12'>
    <Link href='/'>
      <CiHome className='text-accent-1 w-8 h-8'/>
    </Link>
    <FaAngleDoubleRight className='mx-2 text-gray-200'/>
    {
      main
        ? <span className='font-bold text-white'>Blog</span>
        : <>
            <Link className='font-bold text-white' href='/blog'>Blog</Link>
            <FaAngleDoubleRight className='mx-2 text-gray-200'/>
            <span className='font-bold text-white'>{title}</span>
          </>
    }
  </div>;
}
