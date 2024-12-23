'use client';

import ArticleStyles from 'app/admin/dashboard/[id]/components/styles';
import {getGMTDate} from '@/lib/date';

export default function Content({html, published, updated}) {
  /*useEffect(() => {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy-img'));
    let active = false;

    const lazyLoad = () => {
      if (active === false) {
        active = true;

        setTimeout(() => {
          lazyImages.forEach((lazyImage) => {
            const clientRect = lazyImage.getBoundingClientRect();
            if (clientRect.top <= window.innerHeight && clientRect.bottom >= 0) {
              lazyImage.src = lazyImage.dataset.src;

              lazyImage.onload = () => lazyImage.classList.remove('lazy-img');

              lazyImages = lazyImages.filter((image) => image !== lazyImage);

              if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    return () => {
      document.removeEventListener('scroll', lazyLoad);
      window.removeEventListener('resize', lazyLoad);
      window.removeEventListener('orientationchange', lazyLoad);
      document.getElementById('_code')?.remove();
    };
  }, [asPath]);*/

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
