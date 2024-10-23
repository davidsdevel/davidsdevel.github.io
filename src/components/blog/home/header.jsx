import Breadcrumbs from './breadcrumbs';

export default function Header({title, description, thumbnail, main}) {
  return <div className='relative bg-center bg-cover'>
    <div className='
      w-full
      h-full
      flex
      flex-col
      py-32
      md:py-44'
    >
      <div className='flex flex-col justify-center w-full h-full gap-4 md:flex-row'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-center text-main-1 px-1 w-full sm:px-0 sm:w-4/5 md:w-2/3 text-7xl'>{title || <> David&apos;s Devel - <span className='text-accent-1'>Blog</span></>}</h1>
          <h2 className='text-center px-1 w-full text-xl mt-4 sm:px-0 pt-2 sm:w-4/5 md:w-2/3'>{description}</h2>
        </div>
        {
          thumbnail &&
          <div className='flex-grow w-full'>
            <img src={thumbnail} className='border border-slate-200 rounded-xl' alt={title}/>
          </div>
        }
      </div>
    </div>
    <Breadcrumbs title={title} main={main}/>
  </div>;
}
