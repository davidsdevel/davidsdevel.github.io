import Benefits from "@/components/home/benefits";
import CallToAction from "@/components/home/callToAction";
import MarketingHeader from "@/components/home/header";
import Pricing from "@/components/home/pricing";
import Problem from "@/components/home/problem";
import Transform from "@/components/home/transform";

const title = 'Marketing y transformación digital - David\'s Devel';
const description = 'Diseñador de soluciones digitales, desarrollo web y marketing inbound';

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: 'https://www.davidsdevel.site'
    }
}

export default function Page() {
    return <main className="mb-32">
        <MarketingHeader/>
        <Problem/>
        <Transform/>
        <Benefits/>
        <Pricing/>
        <CallToAction/>
    </main>
}
