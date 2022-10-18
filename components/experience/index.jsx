import ExperienceList from './experiences';

export default function Experience() {
  return <section id="experience" className="experience">
      <div className="section-heading text-center">
        <h2>Experiencia</h2>
      </div>
      <div className="container">
        <div className="experience-content">
            <div className="main-timeline">
              <ul>
                <ExperienceList />
              </ul>
            </div>
          </div>
      </div>
    </section>
}