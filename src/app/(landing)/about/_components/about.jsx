import Certifications from "./certifications";
import Image from "next/image";
import FadeIn from '@/app/_ui/fadeIn'

export default function About() {
  return <section id="about" className='bg-main-1 pt-20 pb-40 text-white'>
    <FadeIn>
      <div className="w-full flex justify-center">
        <span className='text-4xl font-bold'>Acerca de mi</span>
      </div>
    </FadeIn>
    <div>
      <FadeIn delay={0.1}>
        <div className='w-full flex flex-col items-center py-12'>
          <h3 className='px-2 text-center text-lg md:w-1/2'>
            Soy un joven Venezolano desarrollador de software amante del marketing, ventas y el diseño, apasionado por lo que hago, autodidacta y emprendedor
          </h3>
        </div>
      </FadeIn>
      <div className="w-full flex flex-col items-center px-2 py-12 md:py-40 md:flex-row md:px-24">
        <FadeIn direction="left" className="w-full md:w-1/2">
          <Image src='/assets/details-computer.svg' alt='Desarrollo de software' width={600} height={400} className="w-full" />
        </FadeIn>
        <FadeIn direction="right" delay={0.15} className="py-4 text-center text-lg w-full md:w-1/2 md:px-12">
          <p>
            Empecé mis estudios en programación en el año 2017, estudiando de manera autodidacta. En 2023 trabajé para una empresa como desarrollador FullStack. Luego comencé a trabajar de manera autonoma con el cual he desarrolado algunos sistemas
          </p>
        </FadeIn>
      </div>
      <div className="w-full flex flex-col items-center px-2 py-12 md:py-40 md:flex-row md:px-24">
        <FadeIn direction="left" className="py-4 w-full md:w-1/2 md:px-12">
          <p className="text-center text-lg">
            Con el tiempo me llamó la atención el marketing y empecé a estudiarlo, especialmente con la metodologia Inbound certificandome en modelos de negocios y marketing en HubSpot Academy
          </p>
          <Certifications/>
        </FadeIn>
        <FadeIn direction="right" delay={0.15} className="w-full md:w-1/2">
          <Image src='/assets/marketing.svg' alt='Marketing digital' width={600} height={400} className="w-full" />
        </FadeIn>
      </div>
    </div>
  </section>
}
