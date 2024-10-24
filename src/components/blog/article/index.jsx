import Header from '../home/header';
//import Recommended from '@/components/client/home/recommended';
import Content from './content';

export default function Article({post}) {
  //const ogTitle =  `${post.title} | ${blog.title}`;
  //const url = `https://${blog.customDomain || `${blog.subdomain}.lettercms.vercel.app`}/${post.url}`;

  return <div>
    <Header title={post.title} description={post.description} thumbnail={post.thumbnail} breadcrumbs/>
    {/*<Recommended post={recommended.slice(0, 3)}/>*/}
    <div className='flex flex-col md:flex-row mt-24 flex-wrap'>
      <Content html={post.content} published={post.published}/>
      <div className='w-full mt-8 bg-main-1 pt-12 pb-24'>
        <div className='mb-4'>
          <span className='ml-2 text-sm font-bold text-white'>Etiquetas</span>
        </div>
        <ul className='flex flex-wrap'>
          {
            post.tags.map(e => <li key={e} className='bg-accent-1 text-white px-2 py-1 rounded-xl my-1 mx-2'>{e}</li>)
          }
        </ul>
      </div>
      {/*<Aside entries={popular} tags={blog.tags} author={post.author} categories={blog.categories}/>*/}
      {/*
        recommended?.length > 0 &&
        <>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 mt-8 lg:mt-0'>
              <span className='text-lg font-bold text-main-700'>Te podría interesar</span>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-around w-full'>
            {
              recommended.map(e => <Card key={e._id} {...e}/>)
            }
          </div>
        </>
      */}
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