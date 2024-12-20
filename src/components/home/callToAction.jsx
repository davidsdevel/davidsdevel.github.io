import ContactForm from "@/components/contactForm";

export default function CallToAction() {
    return <section id="contact" className='px-2 w-full flex flex-col items-center md:px-32 md:flex-row md:justify-between md:items-center md:py-32 md:max-w-[100rem]'>
        <div className="flex flex-col items-center">
            <div className='mt-12 md:mt-0'>
                <h3 className='text-center text-4xl text-main-1'>Impulsa el <span className="text-accent-1">crecimiento de tu negocio</span> ahora</h3>
            </div>
            <div className='my-12'>
                <img src='/assets/meet.svg' alt='' className='max-w-full w-80'/>
            </div>
        </div>
        <div className='px-6 py-12 border border-slate-200 rounded-lg w-full m-auto max-w-md md:m-0'>
            <ContactForm
                defaultMessage='Quiero solicitar una cotizacion para mi negocio'
            />
        </div>
    </section>
}
