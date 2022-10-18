export default function EducationCard({uni, location, since, until, grade, title, description}) {
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