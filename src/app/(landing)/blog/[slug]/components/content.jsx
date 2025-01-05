import ArticleStyles from 'app/admin/dashboard/[id]/components/styles';
import {getGMTDate} from '@/lib/date';

export default function Content({html, published, updated}) {
  return <div className='w-full container flex flex-col mb-12 max-w-4xl m-auto'>
    <div className='flex flex-col sm:flex-row'>
      <span className='text-main-1 mx-4 mb-8 text-sm'>Publicado el <span className='font-bold'>{getGMTDate(published)}</span></span>
      {
        updated &&
        <span className='text-main-1 mx-4 mb-8 text-sm'>Actualizado el <span className='font-bold'>{getGMTDate(updated)}</span></span>
      }
    </div>
    <main
      className='ck-content mx-[2.5%] m-auto'
      dangerouslySetInnerHTML={{__html: html}}
    />
    <ArticleStyles/>
  </div>;
}
