import { TbPoint } from "react-icons/tb"

const pricingValues = [
    {
        title: 'Asesorias desde',
        price: <span>
            <span className="text-3xl text-gray-600">$</span>
            <span className="font-bold text-6xl text-accent-1">5</span>
            <span className='text-lg text-gray-600'>/hora</span>
        </span>,
        description: 'Desde estrategia completa de marketing digital hasta gestión de redes sociales',
        items: [
            'Asesorias',
            'Diseño de estrategias',
            'Analisis de negocio'
        ]
    },
    {
        title: 'Sitios web desde',
        price: <span>
            <span className="text-3xl text-gray-600">$</span>
            <span className="font-bold text-6xl text-accent-1">50</span>
        </span>,
        description: 'Desarrollo web a medida ofreciendo soluciones únicas para tus necesidades específicas.',
        items: [
            'Sitio web statico',
            'Blogs',
            'Alojamiento'
        ]
    },
    {
        title: 'Sistemas de administración',
        price: <span className='text-2xl text-accent-1 font-bold'>Según los requerimentos</span>,
        description: 'Soluciones administrativas y automatizadas para mejorar la eficiencia de tu negocio.',
        items: [
            'Automatización de procesos',
            'Paneles administrativos',
            'Sistemas de gestión'
        ]
    }
]

export default function Pricing() {
    return <div className="bg-main-1 px-2 py-24 md:py-48">
        <h3 className="text-center text-white text-4xl">Precios <span className="text-accent-1">adaptados a tus necesitades</span></h3>
        <p className="text-lg text-center text-white py-12 md:max-w-4xl md:m-auto md:text-xl">
            Sabemos que tú y tu negocio son únicos, consigue precios que se ajustan específicamente a tus necesidades.
            Tanto si estás comenzando y buscas una solución asequible,
            como si necesitas características avanzadas para llevar tu negocio al siguiente nivel.
            
            ¡Consigue una solución hecha a tu medida!
        </p>

        <div className="grid grid-cols gap-4 md:grid-cols-3 md:max-w-[70rem] md:m-auto">
            {
                pricingValues.map(pricing => {
                    return <div className="bg-white px-4 py-8 rounded-lg md:px-8 md:py-12" key={pricing.title}>
                        <h4 className="text-xl text-gray-500">{pricing.title}</h4>
                        <div className="my-8 md:my-12">
                            {pricing.price}
                        </div>
                        <p className="text-gray-700">{pricing.description}</p>
                        <ul className="mt-8 text-sm text-gray-600">
                            {
                                pricing.items.map(item => {
                                    return <li key={item} className="flex items-center gap-1">
                                        <span>
                                            <TbPoint className='text-accent-1'/>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
        </div>

        <h4 className="text-center text-white text-4xl m-auto mt-12  md:max-w-4xl md:mt-24">¡Consigue una cotización a medida y descubre cómo podemos <span className="text-accent-1">ayudarte a alcanzar tus objetivos de marketing</span>!</h4>
    </div>
}
