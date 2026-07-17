'use client'

import { socialMedia } from '@/lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {CiMenuBurger, CiCircleRemove} from 'react-icons/ci'

export default function Menu() {
  const navBar = useRef(null);
  const overflowRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const isLetterCMS = pathname.includes('/services/lettercms');

  useLayoutEffect(() => {
    if (navBar.current) {
      function handleScroll() {

        if (window.scrollY > 200) {
          navBar.current.style.width = '100%';
          navBar.current.style.marginTop = '0';
          navBar.current.style.borderRadius = '0';
          navBar.current.style.border = '0 none none';

          
          if (isLetterCMS) {
            navBar.current.style.backgroundColor = '#fff';
            navBar.current.style.color = '#5f4dee';
          } else {
            navBar.current.style.backgroundColor = '#fff';
            navBar.current.style.color = '#000';
          }
        } else {
          navBar.current.style.width = '90%';
          navBar.current.style.marginTop = '1rem';
          navBar.current.style.borderRadius = '10000000px';
          navBar.current.style.border = '1px solid #eee';
          
          if (isLetterCMS) {
            navBar.current.style.backgroundColor = '#fff';
            navBar.current.style.color = '#5f4dee';
          } else {
            navBar.current.style.backgroundColor = '#fff';
            navBar.current.style.color = '#000';
          }
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isLetterCMS]);

  useEffect(() => {
    if (overflowRef.current) {
      if (isMenuOpen) {
        overflowRef.current.style.display = 'flex';
        setTimeout(() => {
          overflowRef.current.style.opacity = '1';
        }, 0);
      } else {
        overflowRef.current.style.opacity = '0';

        setTimeout(() => {
          overflowRef.current.style.display = 'none';
        }, 300);
      }
    }
  },[isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return <nav className="w-full fixed z-50 top-0 left-0">
    <div ref={navBar} className='transition-all duration-300 ease-in-out flex items-center m-auto border border-[#eee] w-[90%] mt-4 rounded-full justify-between p-4 md:p-6 bg-white'>
      <div>
        <Link href='/' className='hidden md:block'>Inicio</Link>
      </div>
      <div>
        <ul className='hidden md:flex md:gap-2'>
          {
            [
              {link: '/blog', label: 'Blog'},
              {link: '/about', label: 'Acerca de mi'}
            ].map(e => {

              return <li key={e.link}>
                <Link className={`border border-gray-200 rounded-full py-2 px-4 ${isLetterCMS ? 'hover:bg-lettercms-1 hover:border-lettercms-1' : 'hover:bg-main-1 hover:border-main-1 '} hover:text-white`} href={e.link}>{e.label}</Link>
              </li>
            })
          }
        </ul>
        <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CiMenuBurger/>
        </button>
      </div>
    </div>
    <div id='mobile-overflow' ref={overflowRef} className='transition-all duration-300 ease top-0 m-auto left-0 z-50 fixed w-full h-full bg-[#0009] hidden'>
      <div className='absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-white rounded-xl flex justify-center items-center'>
        <div className='absolute right-2 top-2'>
          <button onClick={() => setIsMenuOpen(false)}>
            <CiCircleRemove className='w-8 h-8'/>
          </button>
        </div>
        <ul className='flex flex-col items-center gap-4'>
          <li className='transition-all duration-150 ease w-full flex rounded-full border border-main-1 items-center justify-center py-2 hover:bg-main-1 hover:text-white'>
            <Link className='w-full text-center' href='/'>Inicio</Link>
          </li>
          <li className='transition-all duration-150 ease w-full flex rounded-full border border-main-1 items-center justify-center py-2 hover:bg-main-1 hover:text-white'>
            <Link className='w-full text-center' href='/blog'>Blog</Link>
          </li>
          <li className='transition-all duration-150 ease w-full flex rounded-full border border-main-1 items-center justify-center py-2 hover:bg-main-1 hover:text-white'>
            <Link className='w-full text-center' href='/about'>Acerca de mi</Link>
          </li>
          <li>
            <ul className='flex justify-center items-center mt-4 gap-4'>
              {
                socialMedia.map(e => {
                  return <li key={e.url}>
                    <a href={e.url} target='_blank'>{e.ico}</a>
                  </li>
                })
              }
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}