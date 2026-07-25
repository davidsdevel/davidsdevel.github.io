import { socialMedia } from "@/lib/config"
import Certifications from "./certifications"
import Image from "next/image"
import FadeIn from '@/app/_ui/fadeIn'
import StaggerContainer from '@/app/_ui/staggerContainer'

export default function Header() {
  return <header className="">
    <div className="px-4 py-32 w-full flex flex-col md:items-center md:py-60">
      <FadeIn>
        <h2 className='text-7xl font-bold text-main-1 md:text-center'>Hola, soy <span className='text-accent-1'>David Gonz&aacute;lez</span></h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className='text-2xl mt-4'>Desarrollador Full-Stack e Inbound Marketer</p>
      </FadeIn>
      <StaggerContainer className='flex justify-center items-center mt-4 gap-4'>
        {
          socialMedia.map(e => {
            return <li key={e.url}>
              <a href={e.url} target='_blank'>{e.ico}</a>
            </li>
          })
        }
      </StaggerContainer>
    </div>
    <FadeIn className='w-full flex flex-col items-center -mb-2 px-12 md:px-12'>
      <Image src='/assets/dev.svg' alt='David Gonzalez - Desarrollador' width={800} height={600} className='w-full max-w-3xl'/>
    </FadeIn>
  </header>
}
