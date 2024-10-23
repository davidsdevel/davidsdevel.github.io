'use client'

import Button from '@/components/button'

const projects = [
  {
    title: 'Condominium Manager',
    img: '/images/portfolio/sagacondominios.webp',
    url: 'https://www.sagacondominios.com'
  },
  {
    title: 'Communication system',
    img: '/images/portfolio/lakar.webp',
    url: 'https://lakar.davidsdevel.site'
  },
  {
    title: 'Content Management System (Still in Development)',
    img: '/images/portfolio/lettercms.webp',
    url: 'https://lettercms.vercel.app'
  }
];

export default function Portfolio() {
  return <section id="portfolio" className="px-2 pb-24 md:px-24">
    <div className="w-full flex justify-center pb-12">
      <h3 className="text-xl font-bold">Proyectos</h3>
    </div>
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {
        projects.map(e => {
          return <li key={e.url}>
            <div style={{backgroundImage: `url(${e.img})`}} className='bg-center bg-cover h-60 rounded-xl relative overflow-hidden border border-gray-200 group'>
              <div className="opacity-0 bg-[#000a] transition-all ease duration-300 w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center px-4 group-hover:opacity-100">
                <span className='text-white text-xl text-center'>{e.title}</span>
                <Button className='mt-8 bg-accent-1' onClick={() => window.open(e.url, '_blank')}>Visitar Proyecto</Button>
              </div>
            </div>
          </li>
        })
      }
    </ul>
  </section>
}