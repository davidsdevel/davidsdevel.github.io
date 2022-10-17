export default function Portfolio() {
  return <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>portfolio</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">

                <div className="col-sm-4">
                  <div className="item">
                    <img src="/images/portfolio/p1.jpg" alt="portfolio image"/>
                    <div className="isotope-overlay">
                      <a href="#">
                        ui/ux design
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <img src="/images/portfolio/p2.jpg" alt="portfolio image"/>
                    <div className="isotope-overlay">
                      <a href="#">
                        ui/ux design
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="item">
                    <img src="/images/portfolio/p3.jpg" alt="portfolio image"/>
                    <div className="isotope-overlay">
                      <a href="#">
                        web design
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="item">
                    <img src="/images/portfolio/p4.jpg" alt="portfolio image"/>
                    <div className="isotope-overlay">
                      <a href="#">
                        web development
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <img src="/images/portfolio/p5.jpg" alt="portfolio image"/>
                    <div className="isotope-overlay">
                      <a href="#">
                        web development
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
}