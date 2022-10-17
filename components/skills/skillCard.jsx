export default function SkillCard({name, percent}) {
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
}