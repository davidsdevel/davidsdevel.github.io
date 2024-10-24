'use client';

import {content} from './content.module.css';
import {getGMTDate} from '@/lib/date';

export default function Content({html, published}) {
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

  return <div className='w-full container flex flex-col mb-12'>
    <span className='text-main-500 mx-4 mb-8 font-bold text-sm'>{getGMTDate(published)}</span>
    <main
      className={`${content} m-auto max-w-4xl lg:w-2/3`}
      dangerouslySetInnerHTML={{__html: html}}
    />
  </div>;
}
