export default function Header() {
  return <header className="">
    <div className="px-4 py-32 w-full flex flex-col md:items-center md:py-60">
      <h2 className='text-7xl font-bold text-main-1 md:text-center'>Hola, soy David Gonz&aacute;lez</h2>
      <p className='text-2xl mt-4'>Desarrollador Full-Stack, en tecnologia JavaScript</p>
    </div>
    <div className='w-full flex flex-col items-center -mb-2 px-12 md:px-12'>
      <img src='/assets/dev.svg' alt='' className='w-full max-w-3xl'/>
    </div>
  </header>
}