
import Image from "next/image";
import FadeIn from '@/app/_ui/fadeIn';
import StaggerContainer, { itemVariants } from '@/app/_ui/staggerContainer';

const benefits = [
    {
        title: 'Aumenta tus clientes',
        text: 'Consigue una estrategia de marketing basada en tu modelo de negocios, con ella llegarás a mas personas y aumentarás tus clientes',
        image: '/assets/client.svg'
    },
    {
        title: 'Automatiza tus procesos',
        text: 'Ahorra tiempo y ofrece una experiencia de calidad a tus clientes llevando tus procesos de gesti&oacute;n en un entorno digital',
        image: '/assets/process.svg'
    },
    {
        title: 'Digitaliza tu marca',
        text: 'Da a conocer tu negocio al mundo sin ser frenado por las fronteras y convierte tu negocio en lider de tu sector',
        image: '/assets/branding.svg'
    }
]

export default function Benefits() {
    return <div className="py-12 px-4 md:py-32 md:px-12">
        <FadeIn>
            <h3 className="text-main-1 text-4xl text-center md:mb-24">Transforma tu negocio <span className="text-accent-1">sin dificultades</span></h3>
        </FadeIn>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {
                benefits.map(benefit => {
                    return <div key={benefit.title} className="flex flex-col items-center">
                        <h4 className="text-xl font-bold text-gray-700">{benefit.title}</h4>
                        <p className="mt-4 text-slate-500">{benefit.text}</p>
                        <div className='w-2/3 m-auto py-8 md:py-24'>
                            <Image src={benefit.image} alt={benefit.title} width={400} height={300} className='w-full max-w-3xl'/>
                        </div>
                    </div>
                })
            }
        </StaggerContainer>
    </div>
}
