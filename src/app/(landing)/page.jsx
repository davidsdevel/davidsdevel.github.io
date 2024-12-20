import Benefits from "@/components/home/benefits";
import CallToAction from "@/components/home/callToAction";
import MarketingHeader from "@/components/home/header";
import Pricing from "@/components/home/pricing";
import Problem from "@/components/home/problem";
import Transform from "@/components/home/transform";

export const metadata = {
    title: 'Marketing y transformación digital - David\'s Devel'
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
