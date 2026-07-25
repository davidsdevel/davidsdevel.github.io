'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from '@/app/_ui/fadeIn';

const bussinessTransformations = [
    {
        name: 'HubSpot',
        text: 'Desde su fundación en 2006, HubSpot se ha centrado en proporcionar una plataforma unificada para marketing, ventas y servicio al cliente, utilizando tecnologías avanzadas como la inteligencia artificial y el análisis de datos. La empresa ha innovado constantemente, introduciendo características como la personalización de contenido, la automatización de marketing y la integración de aplicaciones.',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Logo.png'
    },
    {
        name: 'Gymshark',
        text: 'Fundada en 2012 por Ben Francis y Lewis Morgan, ha experimentado un crecimiento impresionante gracias a su enfoque en la transformación digital y el marketing de influencia. Desde sus inicios, la marca se ha centrado en crear una comunidad de entusiastas del fitness a través de plataformas de redes sociales como Instagram, YouTube y X (anteriormente Twitter). Una de las claves del éxito de Gymshark ha sido su colaboración con influencers y atletas de fitness populares, lo que ha permitido a la marca llegar a millones de seguidores',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/Gymshark-Emblem.png'
    },
    {
        name: 'IKEA',
        text: 'Desde sus inicios, IKEA ha sido conocida por su innovador modelo de negocio, que incluye la venta por catálogo y el ensamblaje por el cliente. Sin embargo, en los últimos años, la empresa ha redoblado sus esfuerzos en el comercio electrónico y la tecnología En 2018, IKEA inició una transformación digital radical, enfocándose en la nube y la personalización del cliente. La empresa ha invertido en herramientas digitales para mejorar la experiencia del cliente, como la realidad aumentada y la personalización de productos. Además, IKEA ha modernizado su cadena de suministro y logística mediante el uso de inteligencia artificial y big data.',
        logo: 'https://logos-world.net/wp-content/uploads/2020/09/IKEA-Logo-700x394.png'
    }
]

function BussinessCard({ bussiness, direction }) {
    return <motion.div
        key={bussiness.name}
        initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="py-12 text-center flex flex-col md:flex-row md:items-center md:max-w-7xl md:m-auto md:gap-24"
    >
        <div className="md:w-1/2 md:px-12">
            <img src={bussiness.logo} alt={`${bussiness.name} logo`} loading="lazy"/>
        </div>
        <div className="md:w-1/2">
            <h4 className="text-2xl text-accent-1 md:text-4xl">{bussiness.name}</h4>
            <p className="mt-4 text-slate-500">{bussiness.text}</p>
        </div>
    </motion.div>
}

export default function Transform() {
    const [activeTab, setActiveTab] = useState(0);
    const [prevTab, setPrevTab] = useState(-1);

    const handleTabChange = (index) => {
        setPrevTab(activeTab);
        setActiveTab(index);
    };

    return <div className="bg-slate-200 px-4 py-12 md:py-32">
        <FadeIn>
            <h3 className="text-3xl md:text-4xl text-center mt-12 mb-24">Grandes empresas transformaron su negocio gracias a <span className="text-accent-1">estrategias digitales</span></h3>
        </FadeIn>

        <FadeIn>
            <div className="bg-main-1 w-full m-auto grid grid-cols-1 gap-2 p-2 rounded-xl md:grid-cols-3 md:max-w-xl">
                {
                    bussinessTransformations.map((bussiness, i) => {
                        return <button key={`tabs-${bussiness.name}`} className="bg-white text-main-1 w-full py-2 rounded-lg disabled:bg-accent-1 disabled:text-white" disabled={activeTab === i} onClick={() => handleTabChange(i)}>{bussiness.name}</button>
                    })
                }
            </div>
        </FadeIn>

        <AnimatePresence mode="wait" initial={false}>
            <BussinessCard
                key={activeTab}
                bussiness={bussinessTransformations[activeTab]}
                direction={activeTab - prevTab}
            />
        </AnimatePresence>
    </div>
}
