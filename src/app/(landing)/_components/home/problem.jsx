import Image from "next/image";
import FadeIn from '@/app/_ui/fadeIn';

export default function Problem() {
    return <div className="py-24 px-4 text-center md:py-32 md:px-24">
        <FadeIn>
            <h3 className="text-3xl md:text-4xl">El <span className="text-accent-1">67% de los negocios el LATAM</span> están invirtiendo en estrategias digitales</h3>
        </FadeIn>
        <FadeIn delay={0.15}>
            <p className="mt-8 m-auto text-gray-500 md:mt-16 md:max-w-4xl md:text-2xl">Segun un estudio realizado por el instituto NTT Data y el MIT Technology Review, 2 de cada 3 empresas latinoamericanas han aumentado su inversion en marketing digital en 2024. La transformacion digital de tu negocio es clave para el crecimiento del mismo.</p>
        </FadeIn>
        <FadeIn delay={0.25}>
            <div className='w-full py-24 m-auto md:max-w-xl'>
                <Image src='/assets/investment.svg' alt='Inversión en marketing digital' width={600} height={400} className='w-full'/>
            </div>
        </FadeIn>
        <FadeIn delay={0.35}>
            <p className="mt-8 m-auto md:mt-16 md:max-w-4xl md:text-4xl"><span className="text-accent-1">Forma parte de las empresas lideres de LATAM</span> e invierte en tu crecimiento digital</p>
        </FadeIn>
    </div>
}
