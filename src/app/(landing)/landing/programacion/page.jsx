import Hero from './_components/hero'
import Intro from './_components/intro'
import Timeline from './_components/timeline'
import Closing from './_components/closing'

const title = 'Fundamentos de Programación - David\'s Devel'
const description = 'Aprende los fundamentos de la programación: variables, condicionales, bucles y funciones. Curso introductorio para jóvenes.'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://www.davidsdevel.com/landing/programacion',
    type: 'website',
    images: ['https://www.davidsdevel.com/clases-og.png'],
  },
}

export default function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <Timeline />
      <Closing />
    </>
  )
}
