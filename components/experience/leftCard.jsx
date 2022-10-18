import ExperienceTime from './time';
import ExperienceDescription from './description';

export default function LeftCard({company, location, description, since, until, title}) {
  return <li>
    <div className="single-timeline-box fix">
      <div className="row">
        <div className="col-md-offset-1 col-md-5 experience-time-responsive">
          <ExperienceTime since={since} until={until} title={title}/>
        </div>
        <div className="col-md-5">
          <ExperienceDescription company={company} location={location} description={description} position='right'/>
        </div>
        <div className="col-md-offset-1 col-md-5 experience-time-main">
          <ExperienceTime since={since} until={until} title={title}/>
        </div>
      </div>
    </div>
  </li>
}