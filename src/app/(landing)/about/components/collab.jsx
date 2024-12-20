export default function Contact() {
  return <section id="contact" className='px-2 w-full flex flex-col items-center md:px-24'>
    <hr className='w-full'/>
    <div className='mt-12 md:mt-40'>
      <h3 className='text-center text-4xl text-main-1'>¿Interesado en colaborar conmigo?</h3>
      <p className='text-center '>Siempre estoy abierto a nuevos proyectos y colaboraciones</p>
    </div>
    <div className='my-12'>
      <img src='/assets/meet.svg' alt='' className='max-w-full w-80'/>
    </div>
  </section>
}