'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const bussinessTransformations = [
    {
        name: 'HubSpot',
        text: 'Desde su fundación en 2006, HubSpot se ha centrado en proporcionar una plataforma unificada para marketing, ventas y servicio al cliente, utilizando tecnologías avanzadas como la inteligencia artificial y el análisis de datos. La empresa ha innovado constantemente, introduciendo características como la personalización de contenido, la automatización de marketing y la integración de aplicaciones2.',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Logo.png'
    },
    {
        name: 'Gymshark',
        text: 'Fundada en 2012 por Ben Francis y Lewis Morgan, ha experimentado un crecimiento impresionante gracias a su enfoque en la transformación digital y el marketing de influencia. Desde sus inicios, la marca se ha centrado en crear una comunidad de entusiastas del fitness a través de plataformas de redes sociales como Instagram, YouTube y Twitter1. Una de las claves del éxito de Gymshark ha sido su colaboración con influencers y atletas de fitness populares, lo que ha permitido a la marca llegar a millones de seguidores',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/Gymshark-Emblem.png'
    },
    {
        name: 'IKEA',
        text: 'Desde sus inicios, IKEA ha sido conocida por su innovador modelo de negocio, que incluye la venta por catálogo y el ensamblaje por el cliente. Sin embargo, en los últimos años, la empresa ha redoblado sus esfuerzos en el comercio electrónico y la tecnología En 2018, IKEA inició una transformación digital radical, enfocándose en la nube y la personalización del cliente. La empresa ha invertido en herramientas digitales para mejorar la experiencia del cliente, como la realidad aumentada y la personalización de productos1. Además, IKEA ha modernizado su cadena de suministro y logística mediante el uso de inteligencia artificial y big data.',
        logo: 'https://logos-world.net/wp-content/uploads/2020/09/IKEA-Logo-700x394.png'
    }
]

function BussinessCard({bussiness, isActive}) {
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (ref.current) {
            if (isActive) {
                ref.current.style.display = 'flex';
                
                setTimeout(() => {
                    ref.current.style.opacity = 1;
                    ref.current.style.transform = 'translateY(0)';
                }, 0);
            } else {
                ref.current.style.opacity = 0;
                ref.current.style.transform = 'translateY(-10px)';
                ref.current.style.display = 'none';
                
            }
        }
    }, [isActive]);

    return <div key={`content-${bussiness.name}`} ref={ref} className="transition-all duration-150 ease py-12 text-center flex flex-col md:flex-row md:items-center md:max-w-7xl md:m-auto md:gap-24">
        <div className="md:w-1/2 md:px-12">
            <img src={bussiness.logo} alt={`${bussiness.name} logo`}/>
        </div>
        <div className="md:w-1/2">
            <h3 className="text-2xl text-accent-1 md:text-4xl">{bussiness.name}</h3>
            <p className="mt-4 text-slate-500">{bussiness.text}</p>
        </div>
    </div>

}

export default function Transform() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs button');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                setActiveTab(index);
            });
        });
    }, []);

    return <div className="bg-slate-200 px-4 py-12 md:py-32">
        <div className="bg-main-1 w-full m-auto grid grid-cols-1 gap-2 p-2 rounded-xl md:grid-cols-3 md:max-w-xl">
            {
                bussinessTransformations.map((bussiness, i) => {
                    return <button key={`tabs-${bussiness.name}`} className="bg-white text-main-1 w-full py-2 rounded-lg disabled:bg-accent-1 disabled:text-white" disabled={activeTab === i} onClick={() => setActiveTab(i)}>{bussiness.name}</button>
                })
            }
        </div>
        {
            bussinessTransformations.map((bussiness, i) => {
                return <BussinessCard key={`content-${bussiness.name}`} isActive={activeTab === i} bussiness={bussiness}/>
            })
        }
    </div>
}