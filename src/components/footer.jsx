import { socialMedia } from "@/lib/config";
import Link from "next/link";

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

  return <footer id="footer-copyright" className='bg-black-3 px-12 py-16 w-full text-white flex flex-col md:flex-row'>
    <div className="flex-grow felx flex-col items-start">
      <h5 className="text-2xl mb-8">Enlaces de interes</h5>
      <ul className="flex flex-col gap-2 items-start">
        {
          links.map(e => {
            return <li key={e.href}>
              <Link href={e.href}>{e.label}</Link>
            </li>
          })
        }
      </ul>
    </div>
    <div className="flex-grow felx flex-col items-start">
      <h5 className="text-2xl mb-8">Servicios</h5>
      <ul className="flex flex-col gap-2 items-start">
        {
          servicesLinks.map(e => {
            return <li key={e.href}>
              <Link href={e.href}>{e.label}</Link>
            </li>
          })
        }
      </ul>
    </div>
    <div className="py-4 flex flex-col items-end">
      <div>
        <ul className='flex justify-center items-center mb-4 gap-4'>
          {
            socialMedia.map(e => {
              return <li key={e.url}>
                <a href={e.url} target='_blank'>{e.ico}</a>
              </li>
            })
          }
        </ul>
        <span>&copy; {date.getFullYear()} David&apos;s Devel. Todos los derechos reservados </span>
      </div>
    </div>
  </footer>
}