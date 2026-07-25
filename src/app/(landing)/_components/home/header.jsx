import FadeIn from '@/app/_ui/fadeIn';
import LazyContactForm from '@/app/_ui/lazyContactForm';

export default function MarketingHeader() {
    return <header className="bg-main-1 p-4 sm:px-12 md:px-24 md:py-48">
        <div className="w-full flex flex-col m-auto md:flex-row md:justify-between md:items-center lg:max-w-7xl">
            <div className="text-white text-center py-36 md:text-left md:max-w-3xl">
                <FadeIn>
                    <h1 className="font-bold text-6xl md:text-7xl"><span className="text-accent-1">Aumenta el valor</span> de tu negocio</h1>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <div className="py-12">
                        <h2 className="text-lg md:text-xl">Transforma tu negocio en una empresa de éxito a través de estrategias digitales. En un mundo digital que avanza rapido debes avanzar junto a él</h2>
                    </div>
                </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.3} className="bg-white p-4 rounded-lg w-full m-auto md:max-w-md md:m-0">
                <LazyContactForm
                    buttonText="Solicitar cotizacion"
                    eventForm='Home Header'
                />
            </FadeIn>
        </div>
    </header>
}
