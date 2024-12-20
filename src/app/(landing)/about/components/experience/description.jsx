export default function ExperienceDescription({position, company, location, description}) {
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