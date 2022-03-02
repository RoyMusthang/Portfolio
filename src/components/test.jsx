import { Collapse } from 'bootstrap';

function Test() {
  return (
    <>
      <header id="topnav" className="defaultscroll fixed-top navbar-sticky bg-white border-bottom">
        <nav className="corSecundaria navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand textoBranco" href="#">Josué Lobo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link textoBranco" href="#projetos">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link textoBranco" href="#sobre-mim">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link textoBranco" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="bg-heading bg-light" id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h1><span className="font-weight-300">Hi. We are</span> HomeScript.</h1>
                <h4 className="font-weight-300 mt-4 line-height_1_4">We are a team of creatives, our biggest
                  passion is creating unique <span className="element font-weight-500"
                    data-elements="Applications, Designs, Plugins, Websites"></span></h4>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                  <li><a className="categories active" data-filter="*">All</a></li>
                  <li><a className="categories" data-filter=".plugins">WordPress Plugins</a></li>
                  <li><a className="categories" data-filter=".websites">Websites</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="port portfolio-masonry mt-4">
            <div className="portfolioContainer row photo">
              <div className="col-lg-4 p-4 branding websites">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-1.png"
                    title="Singulier Bénin - https://singulierbenin.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-1.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">Singulier Bénin</p>
                        <h6 className="text-dark mt-1 text-uppercase">A worldwide fashion school.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 p-4 branding websites">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-8.png" title="Adimara  - https://adimara.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-8.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">Adimara</p>
                        <h6 className="text-dark mt-1 text-uppercase">A creative clothes designers.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 p-4 branding websites">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-5.png"
                    title="SCBTRADINGOIL S.A - https://scbtradingoil.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-5.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">SCBTRADINGOIL S.A</p>
                        <h6 className="text-dark mt-1 text-uppercase">An oil sales company.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 p-4 branding design plugins">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-2.png"
                    title="Ultimate SMS Notifications for WooCommerce  - https://ultimatesmsnotifications.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-2.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">Ultimate SMS Notifications for WooCommerce</p>
                        <h6 className="text-dark mt-1 text-uppercase">An all-in-one sms marketing plugin for WooCommerce.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 p-4 design websites">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-3.png"
                    title="AfricaSightSeeings -  - https://africasightseeings.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-3.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">AfricaSightSeeings</p>
                        <h6 className="text-dark mt-1 text-uppercase">A tourist guides company.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 p-4 branding design coffee">
                <div className="item-box">
                  <a className="mfp-image" href="images/portfolio/img-7.png" title="TadagbeRhPlus - https://tadagberhplus`.com">
                    <img className="item-container img-fluid" src="images/portfolio/img-7.png" alt="work-img" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <p className="text-dark mb-0">TadagbeRhPlus</p>
                        <h6 className="text-dark mt-1 text-uppercase">An HR cloud software.</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center mt-4">
                <div className="services-img">
                  <img src="images/icons/spaceship.png" alt="" />
                </div>
                <h6 className="mt-4">C/84 Tokpa-XOXO ,Cotonou</h6>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-center mt-4">
                <div className="services-img">
                  <img src="images/icons/mobilepay.png" alt="" />
                </div>
                <h6 className="mt-4">(+229) 94657656</h6>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-center mt-4">
                <div className="services-img">
                  <img src="images/icons/earth.png" alt="" />
                </div>
                <h6 className="mt-4">freelance@homescriptone.com</h6>
              </div>
            </div>

          </div>

        </div>
      </section>

      <footer className="pt-1 pb-1 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pt-4 pb-4 text-center">
                <p className="text-white mb-0">2021 © HomeScript. This site is owned and operated by <a href="#">HomeScript
                  Ltd</a></p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Test;
