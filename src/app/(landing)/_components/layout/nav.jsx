'use client'

import { socialMedia } from '@/lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {CiMenuBurger, CiCircleRemove} from 'react-icons/ci'

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const isLetterCMS = pathname.includes('/services/lettercms');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 200)
  })

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const textColor = isLetterCMS ? 'text-lettercms-1' : 'text-main-1';

  return <nav className="w-full fixed z-50 top-0 left-0">
    <motion.div
      animate={{
        width: isScrolled ? '100%' : '90%',
        marginTop: isScrolled ? '0' : '1rem',
        borderRadius: isScrolled ? '0' : '10000000px',
        borderWidth: isScrolled ? '0px' : '1px',
        borderColor: isScrolled ? 'transparent' : '#eee',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`flex items-center m-auto justify-between p-4 md:p-6 bg-white ${textColor}`}
    >
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
    </motion.div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='top-0 m-auto left-0 z-50 fixed w-full h-full bg-[#0009]'
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-white rounded-xl flex justify-center items-center'
          >
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
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                  className='flex justify-center items-center mt-4 gap-4'
                >
                  {
                    socialMedia.map(e => {
                      return <motion.li
                        key={e.url}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <a href={e.url} target='_blank'>{e.ico}</a>
                      </motion.li>
                    })
                  }
                </motion.ul>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
}
