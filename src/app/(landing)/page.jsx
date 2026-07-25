import Benefits from "@/app/(landing)/_components/home/benefits";
import CallToAction from "@/app/(landing)/_components/home/callToAction";
import MarketingHeader from "@/app/(landing)/_components/home/header";
import Pricing from "@/app/(landing)/_components/home/pricing";
import Problem from "@/app/(landing)/_components/home/problem";
import Transform from "@/app/(landing)/_components/home/transform";

const title = 'Marketing y transformación digital - David\'s Devel';
const description = 'Diseñador de soluciones digitales, desarrollo web y marketing inbound';

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: 'https://www.davidsdevel.com',
        type: 'website',
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
