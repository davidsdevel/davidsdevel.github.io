import Breadcrumbs from './breadcrumbs';

export default function Header({title, description, thumbnail, main}) {
  return <div className='relative'>
    <div
      className='
      bg-main-1 
        w-full
        h-full
        flex
        flex-col
        py-32
        md:py-44
      '
    >
      <div className='text-white grid grid-cols-1 justify-center w-full h-full gap-12 px-4 md:grid-cols-2 sm:px-16 md:px-24'>
        {
          thumbnail
            ? <>
                <div className='flex flex-col justify-center text-center md:text-left'>
                  <h1 className='opacity-90 font-bold break-words text-4xl md:text-7xl'>{title || <> David&apos;s Devel - <span className='text-accent-1'>Blog</span></>}</h1>
                  <h2 className='w-full text-xl mt-8'>{description}</h2>
                </div>
                <div className='flex-grow w-full px-2'>
                  <img src={thumbnail} className='rounded-xl' alt={title}/>
                </div>
              </>
            : <div className='flex flex-col justify-center col-span-2 text-center m-auto sm:w-4/5 md:w-2/3'>
                <h1 className='opacity-90 font-bold break-words text-4xl md:text-7xl'>{title || <> David&apos;s Devel - <span className='text-accent-1'>Blog</span></>}</h1>
                <h2 className='w-full text-xl mt-8'>{description}</h2>
              </div>
        }        
      </div>
    </div>
    <Breadcrumbs title={title} main={main}/>
  </div>;
}
