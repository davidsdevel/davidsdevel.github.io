import ContactForm from "@/components/contactForm";

export default function MarketingHeader() {
    return <header className="bg-main-1 p-4 sm:px-12 md:px-24 md:py-48">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-white text-center py-36 md:text-left md:max-w-3xl">
                <h1 className="font-bold text-6xl md:text-7xl"><span className="text-accent-1">Aumenta el valor</span> de tu negocio</h1>
                <div className="py-12">
                    <h2 className="text-lg md:text-xl">Transforma tu negocio en una empresa de éxito a través de estrategias digitales. En un mundo digital que avanza rapido debes avanzar junto a él</h2>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg w-full m-auto md:max-w-md md:m-0">
                <ContactForm
                    buttonText="Solicitar cotizacion"
                    eventForm='Home Header'
                />
            </div>
        </div>
    </header>
}
