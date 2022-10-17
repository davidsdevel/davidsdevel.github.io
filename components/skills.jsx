const skills = [
  {
    name: 'JS/TS',
    percent: 90
  },
  {
    name: 'NodeJS',
    percent: 90
  },
  {
    name: 'React/NextJS',
    percent: 90
  },
  {
    name: 'MongoDB/Mongoose',
    percent: 90
  },
  {
    name: 'React/NextJS',
    percent: 90
  }
]

export default function Skills() {
  return <section id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <h2>Habilidades</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-skill-content">
                  {skills.filter((e, i) => (i % 2 === 0)).map(({name, percent}) => {
                    return <div className="barWrapper" key={name}>
                      <span className="progressText">{name}</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={percent.toString()} aria-valuemin="10" aria-valuemax="100">
                          </div>
                        </div>
                        <h3>{percent}%</h3>  
                      </div>
                    </div>
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-skill-content">
                  {skills.filter((e, i) => (i % 2 === 1)).map(({name, percent}) => {
                      return <div className="barWrapper" key={name}>
                        <span className="progressText">{name}</span>
                        <div className="single-progress-txt">
                          <div className="progress ">
                            <div className="progress-bar" role="progressbar" aria-valuenow={percent.toString()} aria-valuemin="10" aria-valuemax="100">
                            </div>
                          </div>
                          <h3>{percent}%</h3>  
                        </div>
                      </div>
                    })}
                </div>
              </div>
            </div>
          </div>  
        </div>
    </section>
}