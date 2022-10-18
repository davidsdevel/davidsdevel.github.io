export default function ExperienceTime({since, until, title, position}) {
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