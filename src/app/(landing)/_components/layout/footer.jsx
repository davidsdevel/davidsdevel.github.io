'use client'

import { socialMedia } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeIn from "@/app/_ui/fadeIn";
import StaggerContainer from "@/app/_ui/staggerContainer";

const links = [
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Acerca de mi',
    href: '/about'
  }
]

const servicesLinks = [
  {
    label: 'LetterCMS',
    href: '/services/lettercms'
  },
  //{
  //  label: 'Monitor Icecast',
  //  href: '/services/icecast'
  //}
]

export default function Footer() {
  const date = new Date();

  const path = usePathname();

  const isLetterCMS = path.includes('/services/lettercms');

  return <footer id="footer-copyright" className={`${isLetterCMS ? 'bg-lettercms-1' : 'bg-black-3'} px-12 py-16 w-full text-white flex flex-col md:flex-row gap-12 md:px-20 md:py-24 lg:py-36 lg:px-30`}>
    <FadeIn delay={0.1} className="flex-grow flex flex-col items-start">
      <h5 className="text-2xl mb-8">Enlaces de interes</h5>
      <StaggerContainer className="flex flex-col gap-2 items-start">
        {
          links.map(e => {
            return <li key={e.href}>
              <Link href={e.href}>{e.label}</Link>
            </li>
          })
        }
      </StaggerContainer>
    </FadeIn>
    <FadeIn delay={0.2} className="flex-grow flex flex-col items-start">
      <h5 className="text-2xl mb-8">Servicios</h5>
      <StaggerContainer className="flex flex-col gap-2 items-start">
        {
          servicesLinks.map(e => {
            return <li key={e.href}>
              <Link href={e.href}>{e.label}</Link>
            </li>
          })
        }
      </StaggerContainer>
    </FadeIn>
    <FadeIn delay={0.3} className="py-4 flex flex-col items-end">
      <div>
        <StaggerContainer className='flex justify-center items-center mb-4 gap-4'>
          {
            socialMedia.map(e => {
              return <li key={e.url}>
                <a href={e.url} target='_blank'>{e.ico}</a>
              </li>
            })
          }
        </StaggerContainer>
        <span>&copy; {date.getFullYear()} David&apos;s Devel. Todos los derechos reservados </span>
      </div>
    </FadeIn>
  </footer>
}
