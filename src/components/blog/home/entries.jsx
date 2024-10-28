import Card from './entryCard';
import Pagination from './pagination';

export default function Entries({posts, actual, pages}) {
  return <div className='w-full max-w-7xl mx-auto'>
    <div className='w-full h-8 md:pl-48'>
      <span className='font-bold text-sm'>Entradas</span>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8'>
      {
        posts.map(e => <Card key={e.id} {...e}/>)
      }
    </div>
    <Pagination actual={actual} pages={pages}/>
  </div>;
}
