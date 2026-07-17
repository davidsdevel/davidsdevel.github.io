'use client'

import { useLayoutEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";

const features = [
  {
    title: 'Integra tus redes sociales',
    description: 'Promociona tus entradas en diferentes canales sin esperar. Enf&oacute;cate en crear, nosotros promocionamos por ti',
    img: `/illustrations/5.svg`,
    feats: [
      'Promociona en tus redes sociales',
      'Env&iacute;a correos a tus suscriptores',
      'Env&iacute;a notificaciones a los dispositivos de tus lectores'
    ]
  },
  {
    title: 'Muestra el contenido adecuado',
    img: `/illustrations/109.svg`,
    description: 'Nuestros sistemas de recomendaci&oacute;n te ayudar&aacute;n a ofrecer el contenido adecuado para cada persona',
    feats: [
      'Filtro de similitud',
      'Recomendaciones basadas en gustos',
      'Contenido 100% din&aacute;mico'
    ]
  },
  {

    title: 'Pensado para tus lectores',
    img: `/illustrations/125.svg`,
    description: 'Nuestra plataforma est&aacute; optimizada para ofrecer la mejor experiencia de carga. Hemos reducido los tiempos de carga para impulsar tus visitas',
    feats: [
      'Reducci&oacute;n del tama&ntilde;o de im&aacute;genes',
      'Carga as&iacute;ncrona'
    ]
  }
];

function FeatureCard({feature, isActive, index}) {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

    useLayoutEffect(() => {
      if (containerRef.current && textRef.current && imageRef.current) {
        if (isActive) {
          containerRef.current.style.display = 'flex';
          
          setTimeout(() => {
            containerRef.current.style.opacity = 1;
                    
            textRef.current.style.transform = 'translateX(0)';
            imageRef.current.style.transform = 'translateX(0)';
          }, 0);
        } else {
          containerRef.current.style.opacity = 0;
          containerRef.current.style.display = 'none';
                
          if (index === 1) {
            textRef.current.style.transform = 'translateX(-30px)';
            imageRef.current.style.transform = 'translateX(30px)';
          } else {
            textRef.current.style.transform = 'translateX(30px)';
            imageRef.current.style.transform = 'translateX(-30px)';
          }
        }
      }
    }, [isActive, index]);

    return <div ref={containerRef} className={`tab-panel opacity-0 hidden w-full transition-all duration-150 ease flex-col items-center ${ index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:py-16 md:w-3/4 md:m-auto`} role="tabpanel">
    <img src={feature.img} alt={feature.title} className='md:w-1/2 transition-all duration-300 ease' ref={imageRef}/>
    <div className="my-8 text-center md:w-1/2 transition-all duration-300 ease" ref={textRef}>
      <h4 className='font-bold text-2xl text-lettercms-2'>{feature.title}</h4>
      <p className='my-8 px-2'>{feature.description}</p>
      <ul className="text-left pl-8 pr-2 mb-12">
        {
          feature.feats.map(feat => {
            return <li className="flex items-center my-2 list-disc " key={feat}>
              <FaCircle className='text-lettercms-1' style={{width: 8}}/>
              <div className='ml-1'>{feat}</div>
            </li>
          })
        }
      </ul>
      <a className='no-underline bg-lettercms-1 text-white rounded-full py-3 px-6' href='https://lettercms.davidsdevel.com/signup'>
        Registrarse
      </a>
    </div>
  </div>
}


export default function Features() {
  const [activeTab, setActiveTab]  = useState(0);

  return <div id="features" className="bg-white flex items-center flex-col py-8">
    <div className="text-center">
      <div className='my-8'>
        <div className="text-4xl font-bold text-lettercms-1">FUNCIONALIDADES</div>
        <h3>Pensando en ti y en tus lectores</h3>
      </div>
      <p className="my-8 px-4 max-w-2xl">
        T&oacute;mate tu tiempo, enf&oacute;cate en escribir, nosotros nos encargamos de entregar tu contenido en todas tus redes sociales con un solo clic. Una vez dentro, ofrecemos el contenido adecuado a la persona adecuada
      </p>
    </div>
    <div className="flex" id="argoTabs" role="tablist">
      <button id='tab-button-1' className={`tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4 ${ activeTab === 0 ? 'bg-lettercms-1 text-white' : 'bg-gray-200 text-gray-700'}`} data-tab="1" role="tab" aria-controls="tab-1" onClick={() => setActiveTab(0)}>Promover</button>
      <button id='tab-button-2' className={`tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4 ${ activeTab === 1 ? 'bg-lettercms-1 text-white' : 'bg-gray-200 text-gray-700'}`} data-tab="2" role="tab" aria-controls="tab-2" onClick={() => setActiveTab(1)}>Deleitar</button>
      <button id='tab-button-3' className={`tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4 ${ activeTab === 2 ? 'bg-lettercms-1 text-white' : 'bg-gray-200 text-gray-700'}`} data-tab="3" role="tab" aria-controls="tab-3" onClick={() => setActiveTab(2)}>Retener</button>
    </div>
    <div className="relative w-full" >
      {
        features.map((e, i) => {
          return <FeatureCard
            key={e.title}
            feature={e}
            isActive={activeTab === i}
            index={i}
          />
        })
      }
    </div>
  </div>
}
