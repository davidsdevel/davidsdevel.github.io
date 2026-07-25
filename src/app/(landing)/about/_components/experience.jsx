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

function ExperienceCard({company, location, description, since, until, title, position}) {
  const isLeft = position === 'left';

  return <li className="mb-8">
    <div className={`flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      <div className={`md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <h2 className="text-lg font-bold text-main-1">{since} - {until}</h2>
        <h3 className="text-md font-semibold">{title}</h3>
      </div>
      <div className="hidden md:flex md:w-2/12 justify-center">
        <div className="w-3 h-3 bg-main-1 rounded-full"></div>
      </div>
      <div className={`md:w-5/12 ${isLeft ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
        <h4 className="font-bold text-accent-1">{company}</h4>
        <h5 className="text-sm text-gray-500">{location}</h5>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  </li>
}

export default function Experience() {
  return <section id="experience" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-main-1">Experiencia</h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-main-500 transform -translate-x-1/2"></div>
          <ul>
            {
              experiences.map((e, i) => {
                const position = i % 2 === 0 ? 'right' : 'left';
                return <ExperienceCard key={e.company + e.title} position={position} {...e}/>
              })
            }
          </ul>
        </div>
      </div>
    </section>
}
