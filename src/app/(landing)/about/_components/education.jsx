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
  return <div className="col-sm-4">
    <div className="single-horizontal-timeline">
      <div className="experience-time">
        <h2>{since} - {until}</h2>
        <h3>{grade} <span>en </span> {title}</h3>
      </div>
      <div className="timeline-horizontal-border">
        <i className="fa fa-circle" aria-hidden="true"></i>
        <span className="single-timeline-horizontal"></span>
      </div>
      <div className="timeline">
        <div className="timeline-content">
          <h4 className="title">{uni}</h4>
          <h5>{location}</h5>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  </div>
}

export default function Education() {
  return <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>Educaci&oacute;n</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          {education.map(e => <EducationCard key={e.location + e.title} {...e}/>)}
        </div>
      </div>
    </div>
  </section>
}
