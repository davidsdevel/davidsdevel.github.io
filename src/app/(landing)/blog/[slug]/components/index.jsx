'use client'

import ContactForm from '@/components/contactForm';
import Aside from '@/components/blog/home/aside';
import Header from '@/components/blog/home/header';
//import Recommended from '@/components/client/home/recommended';
import Content from './content';
import { useEffect, useState } from 'react';
import { setView } from '../actions';

export default function Article({post}) {
  const [canSend, setCanSend] = useState(false);

  useEffect(() => {
    if (!canSend) {
      setCanSend(true);
    } else {
      setView(post.id);
    }
  }, [post.id, canSend]);

  return <div>
    <Header title={post.title} description={post.description} thumbnail={post.thumbnail} breadcrumbs/>
    {/*<Recommended post={recommended.slice(0, 3)}/>*/}
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




/*


    <NextSeo
      title={ogTitle}
      description={post.description}
      canonical={url}
      openGraph={{
        type: 'article',
        url,
        title: ogTitle,
        description: post.description,
        images: [
          { url: post.thumbnail },
        ],
        site_name: blog.title,
        profile: {
          firstName: post.author.name,
          lastName: post.author.lastname,
        },
        article: {
          publishedTime: post.published,
          modifiedTime: post.updated,
          authors:[
            post.author.website ||
            post.author.facebook ||
            post.author.twitter ||
            post.author.linkedin ||
            post.author.instagram ||
            `${post.author.name} ${post.author.lastname}`
          ],
          ...(post.tags ? {tags: post.tags} : {}),
          ...(post.category ? {section: post.category} : {})
        }
      }}
      facebook={{
        appId: process.env.FACEBOOK_APP_ID
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]}
    />
*/