import Card from './skillCard';

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
    percent: 85
  },
  {
    name: 'MongoDB/Mongoose',
    percent: 70
  },
  {
    name: 'Vue/Nuxt',
    percent: 60
  },
  {
    name: 'Firebase',
    percent: 60
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
                  {skills.filter((e, i) => (i % 2 === 0)).map(({name, percent}) => <Card name={name} percent={percent} key={name}/>)}
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-skill-content">
                  {skills.filter((e, i) => (i % 2 === 1)).map(({name, percent}) => <Card name={name} percent={percent} key={name}/>)}
                </div>
              </div>
            </div>
          </div>  
        </div>
    </section>
}