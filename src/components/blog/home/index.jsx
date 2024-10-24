import Header from './header';
//import Recommended from './recommended';
//import Aside from './aside';
import Entries from './entries';

export default function Home({posts, pagination}) {
  return <div className='min-h-screen pb-24'>
    <Header
      title="David's Devel - Blog"
      description='Hola Mundo'
      thumbnail=''
      main
    />
    {/*<Recommended posts={posts.slice(0, 3)}/>*/}
    <div className='flex w-full px-2 md:px-4'>
      <Entries posts={posts} actual={pagination?.page} pages={pagination?.total}/>
      {/*<Aside entries={popular} tags={blog.tags} categories={blog.categories}/>*/}
      {/*<Aside/>*/}
    </div>
  </div>;
}

/*
      <Head>
      {
        pagination.page < pagination.total
        && <link rel= "next" />
      }
      {
        pagination.page > 1
        && <link rel= "prev" />
      }
    </Head>
    <NextSeo
      title={blog.title}
      description={blog.description}
      canonical={url}
      openGraph={{
        type: 'article',
        title: blog.title,
        url,
        description: blog.description,
        images: [
          { url: blog.thumbnail },
        ],
        site_name: blog.title
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