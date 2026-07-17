import Header from './header';
import Aside from './aside';
import Entries from './entries';

export default function Home({posts, pagination}) {
  return <div className='min-h-screen'>
    <Header
      description='Blog enfocado en crecimiento digital'
      thumbnail=''
      main
    />
    <div className='flex flex-col md:flex-row gap-4 w-full p-2 md:p-4'>
      <Entries posts={posts} actual={pagination?.page} pages={pagination?.total}/>
      <div className='w-full md:w-1/3 md:mt-32 md:max-w-md'>
        <Aside/>
      </div>
    </div>
  </div>;
}
