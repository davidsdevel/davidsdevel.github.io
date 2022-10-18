import Card from './card';

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
    uni: 'HubSpot Academy',
    location: 'Curso Online',
    since: '2020',
    until: '2020',
    grade: 'Curso',
    title: 'Inbound Marketing',
    description: 'Desarrollo de estrategias de marketing basados en la metodologia Inbound, creacion y gestion de estrategias basadas en marketing de contenido, técnicas basicas de Copywriting'
  }
]

export default function Education() {
  return <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>Educaci&oacute;n</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          {education.map(e => <Card key={e.location + e.title} {...e}/>)}
        </div>
      </div>
    </div>
  </section>
}
