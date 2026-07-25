'use client'

import Button from '@/app/_ui/button'
import FadeIn from '@/app/_ui/fadeIn'
import StaggerContainer from '@/app/_ui/staggerContainer'

const projects = [
  {
    title: 'Landing empresas de condominios',
    img: 'https://lettercms-api.davidsdevel.com/images/public/saga.png?h=300&q=75',
    url: 'https://www.sagacondominios.com'
  },
  {
    title: 'Plataforma de gestion de condominios',
    img: 'https://lettercms-api.davidsdevel.com/images/public/saga-admin.png?h=300&q=75',
    url: 'https://saga-admin.davidsdevel.com'
  },
  {
    title: 'Plataforma de comunicacion',
    img: '/images/portfolio/lakar.webp',
    url: 'https://lakar.davidsdevel.com'
  },
  {
    title: 'Sistema de gestion de contenido (CMS)',
    img: '/images/portfolio/lettercms.webp',
    url: 'https://lettercms.davidsdevel.com'
  },
  {
    title: 'Sitio web para emisora de radio',
    img: '/images/portfolio/lavozdeoieniv.webp',
    url: 'https://www.lavozdeoieniv.com'
  },
  {
    title: 'Plataforma educativa',
    img: 'https://lettercms-api.davidsdevel.com/images/public/uecam-plaform.png?h=300&q=75',
    url: 'https://uecam.davidsdevel.com'
  },
];

export default function Portfolio() {
  return <section id="portfolio" className="px-2 pb-24 md:px-24">
    <FadeIn>
      <div className="w-full flex justify-center pb-12">
        <h3 className="text-xl font-bold">Proyectos</h3>
      </div>
    </FadeIn>
    <StaggerContainer className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
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
    </StaggerContainer>
  </section>
}
