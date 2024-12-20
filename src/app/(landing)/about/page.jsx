import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Collab from './components/collab';
import Contact from './components/contact';

export const metadata = {
    title: 'Acerca de mi - David\'s Devel',
    description: 'Desarrollador Full Stack en Tecnologia Javascript'
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
