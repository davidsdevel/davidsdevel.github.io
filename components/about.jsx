const socialMedia = [
  {
    url: 'https://www.facebook.com/davidsdevel',
    type: 'facebook'
  },
  {
    url: 'https://twitter.com/davidsdevel',
    type: 'twitter'
  },
  {
    url: 'https://www.instagram.com/davidsdevel',
    type: 'instagram'
  },
  {
    url: 'https://www.linkedin.com/in/davidsdevel',
    type: 'linkedin'
  },
  {
    url: 'https://github.com/davidsdevel',
    type: 'github'
  }
]

export default function About() {
  return <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>Acerca de mi</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  Soy un joven Venezolano desarrollador FullStack Javascript, principalmente con las tecnologias: NextJS, MongoDB, NodeJS. Apasionado por lo que hago, autodidacta y emprendedor. Amante del marketing, ventas y diseño. Creador de LetterCMS, proyecto con el cual tengo la vision de mejorar la manera en que los pequeños creadores de contenido, planifican, crean, promocionan y entregan su contenido, ofreciendo una experiencia de calidad tanto para creadores como para el usuario final
                </h3>
                <p>
                Mi mayor experiencia es desarrollando software de manera personal, creando y probando ideas, LetterCMS naci&oacute; de una de esas ideas. Desarollar software y poderlo integrar a distintas areas es de las mejores formas de crearlo, satisfacer una necesidad de la vida real a trav&eacute;s del software. A veces no debemos reinventar la rueda, pero si mejorar la que ya tenemos.
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>davidsdevel@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>Sitio Web</h3>
                      <p>davidsdevel.github.io</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="/images/about/davidsdevel-profile.webp" alt="David's Devel Developer Picture"/>
                <div className="about-list-icon">
                  <ul>
                   {
                     socialMedia.map(e => {
                      return <li key={e.url}>
                        <a href={e.url} target='_blank' rel="noreferrer">
                          <i className={`fa fa-${e.type}`} aria-hidden="true"></i>
                        </a>
                      </li>
                     })
                   }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
}