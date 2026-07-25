'use client'

import dynamic from 'next/dynamic';
import Aside from './aside';
import Header from './header';
import Content from './content';
import { useEffect } from 'react';

const ContactForm = dynamic(() => import('@/app/_ui/contactForm'), { ssr: false });

export default function Article({post}) {
  useEffect(() => {
    fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{}'
    })
      .then(res => res.json())
      .then(({endpoint, secret}) => {
        fetch(`${endpoint}/v1/views/${post.slug}`, {
          method: 'POST',
          headers: {'Authorization': `Bearer ${secret}`}
        })
      })
      .catch(() => {});
  }, [post.id]);

  return <div>
    <Header title={post.title} description={post.description} thumbnail={post.thumbnail} breadcrumbs/>
    <div className='flex flex-col md:flex-row mt-24 flex-wrap'>
      <div className='flex-grow'>
        <Content html={post.content} published={post.published} updated={post.updated}/>
        <div className='w-full mt-8 bg-main-1 py-12 md:px-8 md:max-w-4xl md:rounded-lg md:m-auto md:mb-24'>
          <div className='mb-4'>
            <span className='ml-2 text-sm font-bold text-white'>Etiquetas</span>
          </div>
          <ul className='flex flex-wrap'>
            {
              post.tags.map(e => <li key={e} className='bg-accent-1 text-white px-2 py-1 rounded-xl my-1 mx-2'>{e}</li>)
            }
          </ul>
        </div>
      </div>
      <div className='p-4 w-full md:w-1/3 md:max-w-md'>
        <Aside/>
      </div>
      <div className='bg-main-1 w-full py-32'>
        <h4 className='text-white text-4xl my-8 text-center'>Consigue soluciones digitales para el <span className='text-accent-1'>crecimiento de tu negocio</span></h4>
        <div className='bg-white rounded-lg  max-w-md m-auto px-4 py-8'>
          <ContactForm
            defaultMessage='Quiero solicitar una cotizacion para mi negocio'
            buttonText="Solicitar cotización"
            eventForm='Post'
          />
        </div>
      </div>
    </div>
  </div>;
}
