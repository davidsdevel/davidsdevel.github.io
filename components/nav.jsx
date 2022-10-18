import Link from 'next/link';

export default function Menu() {
  return <header className="top-area">
    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" href="/">browny</a>
        </div>
        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
          <li className=" smooth-menu active"></li>
            <li className="smooth-menu">
              <Link href="#education">
                <a>Educación</a>
              </Link>
            </li>
            <li className="smooth-menu">
              <Link href="#skills">
                <a>Habilidades</a>
              </Link>
            </li>
            <li className="smooth-menu">
              <Link href="#experience">
                <a>Experiencia</a>
              </Link>
            </li>
            <li className="smooth-menu">
              <Link href="#portfolio">
                <a>Portafolio</a>
              </Link>
            </li>
            <li className="smooth-menu">
              <Link href="#contact">
                <a>Contácto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="clearfix"/>
  </header>
}