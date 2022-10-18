import RightCard from './rightCard';
import LeftCard from './leftCard';

const experiences = [
  {
    company: 'Fundación Radial La Voz de OIENIV',
    location: 'Carabobo, Venezuela',
    since: '2017',
    until: '2020',
    title: 'Radio Operador',
    description: "Solucionar Problemas Técnicos. Grabar y Editar Audio. Operar Programas de Radio, Programar Automatización de la Radio."
  },
  {
    company: 'Cambrian Intelligence',
    location: 'Remoto',
    since: '2018',
    until: '2018',
    title: 'Desarrollador de Software',
    description: 'Desarrollo de sistemas de acuerdo a la necesidad, gestion de flujos de trabajo con Git, desarrollo colaborativo de software'
  },
  {
    company: 'Autonomo',
    location: 'Remoto',
    since: '2018',
    until: '2022',
    title: 'Desarrollador de Software',
    description: 'Desarrollar Proyectos Personales. Construir Relaciones con Clientes. Desarrollar el Software Necesario para Cubrir la Necesidad del Cliente .'
  }
]

export default function ExperienceCard() {
  return <>{
    experiences.map((e, i) => {
      const isPair = i % 2 === 0;

      return isPair
        ? <RightCard key={e.company + e.title} {...e}/>
        : <LeftCard key={e.company + e.title} {...e}/>
    })
  }</>

}


                