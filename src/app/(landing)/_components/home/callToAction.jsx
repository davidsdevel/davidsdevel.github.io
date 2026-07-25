import Image from "next/image";
import FadeIn from '@/app/_ui/fadeIn';
import LazyContactForm from '@/app/_ui/lazyContactForm';

export default function CallToAction() {
    return <section id="contact" className='px-2 w-full flex flex-col m-auto items-center md:px-32 md:flex-row md:justify-between md:items-center md:py-32 md:max-w-[100rem]'>
        <div className="flex flex-col items-center">
            <FadeIn className='mt-12 md:mt-0'>
                <h3 className='text-center text-4xl text-main-1'>Impulsa el <span className="text-accent-1">crecimiento de tu negocio</span> ahora</h3>
            </FadeIn>
            <FadeIn delay={0.15} className='my-12'>
                <Image src='/assets/meet.svg' alt='Reunión de negocio' width={320} height={240} className='max-w-full w-80'/>
            </FadeIn>
        </div>
        <FadeIn direction="right" delay={0.3} className='px-6 py-12 border border-slate-200 rounded-lg w-full m-auto max-w-md md:m-0'>
            <LazyContactForm
                defaultMessage='Quiero solicitar una cotizacion para mi negocio'
                buttonText="Solicitar cotización"
                eventForm='Home CTA'
            />
        </FadeIn>
    </section>
}
