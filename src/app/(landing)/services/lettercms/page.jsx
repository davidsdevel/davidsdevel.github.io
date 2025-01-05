import CallToAction from "./components/callToAction";
import Description from "./components/description";
import Features from "./components/features";
import Header from "./components/header";

const title = 'LetterCMS - David\'s Devel';
const description = 'CMS enfocado en atraccion, retencion y deleite de usuarios';

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: 'https://www.davidsdevel.site/services/lettercms'
    }
}

export default function Page() {
    return <main className='bg-main-1'>
        <Header/>
        <Description/>
        <Features/>
        <CallToAction/>
    </main>
}
