export default function Contact() {
  return <section id="contact" className="contact">
      <div className="section-heading text-center">
        <h2>Contáctame</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" placeholder="Name*" name="name"/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email*" name="email"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <a className="contact-btn" href="#" role="button">submit</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>David Gonzalez</h3>
                    <p>Full-Stack Developer - LetterCMS owner</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>phone</h3>
                      <p>987-123-6547</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>email</h3>
                      <p>browny@info.com</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>website</h3>
                      <p>www.brownsine.com</p>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li><a target='_blank' href="https://facebook.com/davidsdevel" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li><a target='_blank' href="https://twitter.com/davidsdevel" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/davidsdevel" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                    <li><a target='_blank' href="https://instagram.com/davidsdevel" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
}