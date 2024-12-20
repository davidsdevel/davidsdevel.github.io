import ExperienceTime from './time';
import ExperienceDescription from './description';

export default function RightCard({company, location, description, since, until, title}) {
  return <li>
    <div className="single-timeline-box fix">
      <div className="row">
        <div className="col-md-5">
          <ExperienceTime since={since} until={until} title={title} position='right'/>
        </div>
        <div className="col-md-offset-1 col-md-5">
          <ExperienceDescription company={company} location={location} description={description}/>
        </div>
      </div>
    </div>
  </li>
}