import Image from "next/image";
import FadeIn from '@/app/_ui/fadeIn'

export default function Contact() {
  return <section id="contact" className='px-2 w-full flex flex-col items-center md:px-24'>
    <hr className='w-full'/>
    <FadeIn className='mt-12 md:mt-40'>
      <h3 className='text-center text-4xl text-main-1'>¿Interesado en colaborar conmigo?</h3>
      <p className='text-center '>Siempre estoy abierto a nuevos proyectos y colaboraciones</p>
    </FadeIn>
    <FadeIn delay={0.15} className='my-12'>
      <Image src='/assets/meet.svg' alt='Reunión de colaboración' width={320} height={240} className='max-w-full w-80'/>
    </FadeIn>
  </section>
}
