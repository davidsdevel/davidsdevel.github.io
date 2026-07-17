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

function ExperienceTime({since, until, title, position}) {
  const isRight = position === 'right';

  return <div className={`experience-time${isRight ? ' text-right' : ''}`}>
    <h2>
      {
        !isRight &&
        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
      }
      {since} - {until}
      </h2>
    <h3>{title}</h3>
  </div>
}

function ExperienceDescription({position, company, location, description}) {
  const isRight = position === 'right';

  return <div className="timeline">
    <div className={`timeline-content${isRight ? ' text-right' : ''}`}>
      <h4 className="title">
        {
          !isRight &&
          <span><i className="fa fa-circle" aria-hidden="true"></i></span>
        }
        {company}
      </h4>
      <h5>{location}</h5>
      <p className="description">{description}</p>
    </div>
  </div>
}

function TimelineCard({position, company, location, description, since, until, title}) {
  const isLeft = position === 'left';

  return <li>
    <div className="single-timeline-box fix">
      <div className="row">
        {isLeft && <div className="col-md-offset-1 col-md-5">
          <ExperienceTime since={since} until={until} title={title}/>
        </div>}
        <div className="col-md-5">
          <ExperienceDescription company={company} location={location} description={description} position={isLeft ? 'right' : undefined}/>
        </div>
        {!isLeft && <div className="col-md-offset-1 col-md-5">
          <ExperienceTime since={since} until={until} title={title} position='right'/>
        </div>}
      </div>
    </div>
  </li>
}

export default function Experience() {
  return <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>Experiencia</h2>
      </div>
      <div className="container">
        <div className="experience-content">
            <div className="main-timeline">
              <ul>
                {
                  experiences.map((e, i) => {
                    const position = i % 2 === 0 ? 'right' : 'left';
                    return <TimelineCard key={e.company + e.title} position={position} {...e}/>
                  })
                }
              </ul>
            </div>
          </div>
      </div>
    </section>
}
