import Header from './_components/header';
import About from './_components/about';
import Skills from './_components/skills';
import Portfolio from './_components/portfolio';
import Collab from './_components/collab';
import Contact from './_components/contact';

export const metadata = {
    title: 'Acerca de mi - David\'s Devel',
    description: 'Desarrollador Full Stack en Tecnologia Javascript',
    openGraph: {
        title: 'Acerca de mi - David\'s Devel',
        description: 'Desarrollador Full Stack en Tecnologia Javascript',
    }
}

export default function Main() {
    return <>
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Collab/>
        <Contact/>
    </>
}
