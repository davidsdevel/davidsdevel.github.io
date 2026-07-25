const education = [
  {
    uni: 'Platzi',
    location: 'Curso Online',
    since: '2017',
    until: '2018',
    grade: 'Curso',
    title: 'Marca Parsonal',
    description: 'Creacion y gestion de marca personal, conceptos basicos de marketing digital, promociones con estrategias multicanal'
  },
  {
    uni: 'Platzi',
    location: 'Curso Online',
    since: '2017',
    until: '2018',
    grade: 'Curso',
    title: 'Programación Basica',
    description: 'Conceptos basicos de programacion con JavaScript, creación y planificación de desarrollo de software'
  },
  {
    uni: 'INCES',
    location: 'Carabobo Venezuela',
    since: '2020',
    until: '2020',
    grade: 'Curso',
    title: 'Electronica Básica',
    description: 'Creacion y diseño de circuitos, reparacion y mantenimiento de equipos electronicos'
  },
  {
    uni: 'HubSpot Academy',
    location: 'Curso Online',
    since: '2020',
    until: '2020',
    grade: 'Curso',
    title: 'Inbound Marketing',
    description: 'Desarrollo de estrategias de marketing basados en la metodologia Inbound, creacion y gestion de estrategias basadas en marketing de contenido, técnicas basicas de Copywriting'
  }
]

function EducationCard({uni, location, since, until, grade, title, description}) {
  return <div className="w-full md:w-1/3 p-4">
    <div className="border-l-2 border-main-1 pl-4 py-4">
      <div className="mb-2">
        <h2 className="text-lg font-bold text-main-1">{since} - {until}</h2>
        <h3 className="text-md font-semibold">{grade} en {title}</h3>
      </div>
      <div className="border-l-2 border-main-500 pl-4">
        <h4 className="font-bold text-accent-1">{uni}</h4>
        <h5 className="text-sm text-gray-500">{location}</h5>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  </div>
}

export default function Education() {
  return <section id="education" className="py-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-main-1">Educaci&oacute;n</h2>
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap">
        {education.map(e => <EducationCard key={e.location + e.title} {...e}/>)}
      </div>
    </div>
  </section>
}
