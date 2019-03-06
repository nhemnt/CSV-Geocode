import React, { Component } from "react";


class Home extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
        <div>
        <div>
          <header>
            <nav className="navbar navbar-default bootsnav navbar-fixed-top header-light bg-transparent nav-box-width white-link">
              <div className="container nav-header-container">
                <div className="row">
                  <div className="col-md-2 col-xs-5">
                    <a href="index.html" title="hemant" className="logo">
                      <img
                        src="images/logo.png"
                        data-rjs="images/logo@2x.png"
                        className="logo-dark"
                        alt="hemant"
                      />
                      <img
                        src="images/logo-white.png"
                        data-rjs="images/logo-white@2x.png"
                        alt="hemant"
                        className="logo-light default"
                      />
                    </a>
                  </div>
                  <div className="col-md-7 col-xs-2 width-auto pull-right accordion-menu">
                    <button
                      type="button"
                      className="navbar-toggle collapsed pull-right"
                      data-toggle="collapse"
                      data-target="#navbar-collapse-toggle-1"
                    >
                      <span className="sr-only">toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <div
                      className="navbar-collapse collapse pull-right"
                      id="navbar-collapse-toggle-1"
                    >
                      <ul className="nav navbar-nav navbar-left panel-group no-margin alt-font font-weight-800">
                        <li>
                          <a href="#home" title="Home" className="inner-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about" title="About" className="inner-link">
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            title="Services"
                            className="inner-link"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#work" title="Work" className="inner-link">
                            Work
                          </a>
                        </li>
                        <li>
                          <a href="#team" title="Team" className="inner-link">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#blog" title="Blog" className="inner-link">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#clients"
                            title="Clients"
                            className="inner-link"
                          >
                            Clients
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            title="Contact"
                            className="inner-link"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <section
            id="home"
            className="no-padding parallax mobile-height wow fadeIn"
            data-stellar-background-ratio="0.5"
            style="background-image:url('http://placehold.it/1920x1200');"
          >
            <div className="opacity-extra-medium bg-extra-dark-gray" />
            <div className="container position-relative full-screen">
              <div className="slider-typography text-center">
                <div className="slider-text-middle-main xs-padding-15px-lr">
                  <div className="slider-text-middle">
                    <img src="images/text.png" alt="" />
                    <div className="down-section text-center">
                      <a href="#about" className="inner-link">
                        <i className="ti-arrow-down icon-extra-small text-white bg-deep-pink padding-15px-all xs-padding-10px-all border-radius-100" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 text-center center-col margin-eight-bottom xs-margin-30px-bottom">
                  <span className="alt-font text-deep-pink text-medium margin-5px-bottom display-block">
                    We are delivering beautiful digital products
                  </span>
                  <h5 className="font-weight-300 text-extra-dark-gray ">
                    We provide high quality and cost effective offshore web and
                    software development services
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom xs-text-center wow fadeInUp last-paragraph-no-margin">
                  <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left pull-left xs-no-padding-right">
                    <i className="icon-lightbulb icon-extra-medium text-medium-gray xs-margin-10px-bottom position-relative top-minus3" />
                    <span className="separator-line-verticle-large margin-ten-right bg-deep-pink vertical-align-top pull-right margin-two-top hidden-xs" />
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 sm-no-padding-lr">
                    <span className="text-medium margin-four-bottom text-extra-dark-gray alt-font display-block sm-margin-10px-bottom xs-margin-5px-bottom">
                      Digital Branding
                    </span>
                    <p className="width-90 md-width-100">
                      We can help you find the precise message to clearly speak to
                      who you are as a company.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom xs-text-center wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.2s"
                >
                  <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left pull-left xs-no-padding-right">
                    <i className="icon-globe icon-extra-medium text-medium-gray xs-margin-10px-bottom position-relative top-minus3" />
                    <span className="separator-line-verticle-large margin-ten-right bg-deep-pink vertical-align-top pull-right margin-two-top hidden-xs" />
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 sm-no-padding-lr">
                    <h5 className="text-medium margin-four-bottom text-extra-dark-gray alt-font display-block sm-margin-10px-bottom xs-margin-5px-bottom">
                      Web Interactive
                    </h5>
                    <p className="width-90 md-width-100">
                      Our websites look great, but each page has a clearly defined
                      conversion goal.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4 col-xs-12 xs-text-center wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.4s"
                >
                  <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left pull-left xs-no-padding-right">
                    <i className="icon-paintbrush icon-extra-medium text-medium-gray xs-margin-10px-bottom position-relative top-minus3" />
                    <span className="separator-line-verticle-large margin-ten-right bg-deep-pink vertical-align-top pull-right margin-two-top hidden-xs" />
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 sm-no-padding-lr">
                    <h5 className="text-medium margin-four-bottom text-extra-dark-gray alt-font display-block sm-margin-10px-bottom xs-margin-5px-bottom">
                      Graphic Design
                    </h5>
                    <p className="width-90 md-width-100">
                      We interlace our creative with solid marketing and branding
                      principles. A strong brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="parallax wow fadeIn"
            data-stellar-background-ratio="0.3"
            style={{ backgroundImage: `url('http://placehold.it/1920x1200')` }}
          >
            <div className="opacity-extra-medium bg-black" />
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 text-center center-col last-paragraph-no-margin">
                  <a
                    className="popup-youtube"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    <img
                      src="images/icon-play.png"
                      className="width-130px"
                      alt=""
                    />
                  </a>
                  <h4 className="alt-font text-white margin-15px-bottom xs-margin-20px-bottom">
                    Unique. Powerful. Creative.
                  </h4>
                  <p className="text-extra-large font-weight-300 text-light-gray width-85 xs-width-100 display-inline-block margin-25px-bottom">
                    We provide high quality and cost effective offshore web and
                    software development services.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="bg-light-gray wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center last-paragraph-no-margin">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">
                    Our Services
                  </h5>
                  <p className="no-margin-bottom">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since. Lorem Ipsum has been the
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text since.
                  </p>
                </div>
              </div>
              <div className="row equalize xs-equalize-auto">
                <div className="col-md-3 col-sm-6 col-xs-12 sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
                  <div className="bg-white box-shadow-light text-center padding-eighteen-tb feature-box-8 position-relative z-index-5 height-100 xs-padding-15px-lr">
                    <div className="display-inline-block margin-20px-bottom xs-margin-10px-bottom">
                      <i className="icon-desktop text-white icon-round-small bg-deep-pink" />
                    </div>
                    <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                      Sales Promotion
                    </div>
                    <p className="width-75 md-width-90 xs-width-100 center-col">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy.
                    </p>
                    <div className="feature-box-overlay bg-deep-pink" />
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.2s"
                >
                  <div className="bg-white box-shadow-light text-center padding-eighteen-tb feature-box-8 position-relative z-index-5 height-100 xs-padding-15px-lr">
                    <div className="display-inline-block margin-20px-bottom xs-margin-10px-bottom">
                      <i className="icon-tools text-white icon-round-small bg-deep-pink" />
                    </div>
                    <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                      SEO Marketing
                    </div>
                    <p className="width-75 md-width-90 xs-width-100 center-col">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy.
                    </p>
                    <div className="feature-box-overlay bg-deep-pink" />
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-padding-15px-lr"
                  data-wow-delay="0.4s"
                >
                  <div className="bg-white box-shadow-light text-center padding-eighteen-tb feature-box-8 position-relative z-index-5 height-100">
                    <div className="display-inline-block margin-20px-bottom xs-margin-10px-bottom">
                      <i className="icon-scissors text-white icon-round-small bg-deep-pink" />
                    </div>
                    <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                      Strategic Planning
                    </div>
                    <p className="width-75 md-width-90 xs-width-100 center-col">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy.
                    </p>
                    <div className="feature-box-overlay bg-deep-pink" />
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp last-paragraph-no-margin xs-padding-15px-lr"
                  data-wow-delay="0.6s"
                >
                  <div className="bg-white box-shadow-light text-center padding-eighteen-tb feature-box-8 position-relative z-index-5 height-100">
                    <div className="display-inline-block margin-20px-bottom xs-margin-10px-bottom">
                      <i className="icon-laptop text-white icon-round-small bg-deep-pink" />
                    </div>
                    <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                      Product Branding{" "}
                    </div>
                    <p className="width-75 md-width-90 xs-width-100 center-col">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy.
                    </p>
                    <div className="feature-box-overlay bg-deep-pink" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left sm-margin-ten-bottom xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight">
                  <div className="feature-box-5 position-relative">
                    <i className="icon-desktop text-medium-gray icon-extra-medium top-6" />
                    <div className="feature-content">
                      <h6
                        className="display-block text-extra-dark-gray font-weight-600 alt-font no-margin-bottom xs-margin-5px-bottom timer"
                        data-speed="2000"
                        data-to="350"
                      >
                        350
                      </h6>
                      <span className="text-small text-uppercase position-relative top-minus4">
                        Happy Clients
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left sm-margin-ten-bottom xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight"
                  data-wow-delay="0.2s"
                >
                  <div className="feature-box-5 position-relative">
                    <i className="icon-camera text-medium-gray icon-extra-medium top-6" />
                    <div className="feature-content">
                      <h6
                        className="display-block text-extra-dark-gray font-weight-600 alt-font no-margin-bottom xs-margin-5px-bottom timer"
                        data-speed="2000"
                        data-to="780"
                      >
                        780
                      </h6>
                      <span className="text-small text-uppercase position-relative top-minus4">
                        Photo Capture
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <div className="feature-box-5 position-relative">
                    <i className="icon-laptop text-medium-gray icon-extra-medium top-6" />
                    <div className="feature-content">
                      <h6
                        className="display-block text-extra-dark-gray font-weight-600 alt-font no-margin-bottom xs-margin-5px-bottom timer"
                        data-speed="2000"
                        data-to="850"
                      >
                        850
                      </h6>
                      <span className="text-small text-uppercase position-relative top-minus4">
                        Work Completed
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left xs-padding-15px-left wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div className="feature-box-5 position-relative">
                    <i className="icon-chat text-medium-gray icon-extra-medium top-6" />
                    <div className="feature-content">
                      <h6
                        className="display-block text-extra-dark-gray font-weight-600 alt-font no-margin-bottom xs-margin-5px-bottom timer"
                        data-speed="2000"
                        data-to="650"
                      >
                        650
                      </h6>
                      <span className="text-small text-uppercase position-relative top-minus4">
                        Telephonic Talk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-light-gray border-none no-padding wow fadeIn">
            <div className="container-fluid">
              <div className="row equalize sm-equalize-auto">
                <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeInLeft">
                  <div className="display-table-cell-vertical-middle padding-thirteen-all md-padding-ten-all sm-padding-six-all xs-padding-50px-tb xs-no-padding-lr">
                    <h5 className="alt-font text-extra-dark-gray sm-text-center margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom font-weight-600">
                      <span className="font-weight-300 display-block xs-margin-15px-bottom">
                        We're small but impressive.
                      </span>{" "}
                      Hand crafted pixel perfect designs.
                    </h5>
                    <div className="panel-group accordion-style2" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="accordion-toggle"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                          >
                            <div className="panel-title">
                              <span className="alt-font font-weight-600 text-deep-pink tab-tag">
                                01
                              </span>
                              <span className="text-extra-dark-gray xs-width-80 display-inline-block">
                                Unique and bold website design
                              </span>
                              <i className="fas fa-angle-up pull-right text-extra-dark-gray " />
                            </div>
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="accordion-toggle"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                          >
                            <div className="panel-title">
                              <span className="alt-font font-weight-600 text-deep-pink tab-tag">
                                02
                              </span>
                              <span className="text-extra-dark-gray xs-width-80 display-inline-block">
                                We're ready to start now
                              </span>
                              <i className="indicator fas fa-angle-down pull-right text-extra-dark-gray " />
                            </div>
                          </a>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                          <div className="panel-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="accordion-toggle"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                          >
                            <div className="panel-title">
                              <span className="alt-font font-weight-600 text-deep-pink tab-tag">
                                03
                              </span>
                              <span className="text-extra-dark-gray xs-width-80 display-inline-block">
                                We Deliver the highest quality
                              </span>
                              <i className="indicator fas fa-angle-down pull-right text-extra-dark-gray " />
                            </div>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-12 col-xs-12 cover-background sm-height-500px xs-height-350px wow fadeInRight"
                  style={{ background: `url('http://placehold.it/1200x854')` }}
                />
              </div>
            </div>
          </section>
          <section id="work" className="no-padding-bottom wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">
                    Recent Portfolio
                  </h5>
                  <p className="no-margin-bottom">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since. Lorem Ipsum has been the
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="portfolio-filter nav nav-tabs border-none portfolio-filter-tab-1 alt-font text-uppercase text-center text-small font-weight-600 margin-80px-bottom sm-margin-40px-bottom xs-margin-20px-bottom">
                    <li className="nav active">
                      <a
                        href="javascript:void(0);"
                        data-filter="*"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav">
                      <a
                        href="javascript:void(0);"
                        data-filter=".web"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        Web
                      </a>
                    </li>
                    <li className="nav">
                      <a
                        href="javascript:void(0);"
                        data-filter=".advertising"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        Advertising
                      </a>
                    </li>
                    <li className="nav">
                      <a
                        href="javascript:void(0);"
                        data-filter=".branding"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        Branding
                      </a>
                    </li>
                    <li className="nav">
                      <a
                        href="javascript:void(0);"
                        data-filter=".design"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        Design
                      </a>
                    </li>
                    <li className="nav">
                      <a
                        href="javascript:void(0);"
                        data-filter=".photography"
                        className="xs-display-inline light-gray-text-link text-very-small"
                      >
                        Photography
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid no-padding">
              <div className="row">
                <div className="filter-content overflow-hidden padding-15px-lr">
                  <ul className="portfolio-grid work-4col gutter-small hover-option7">
                    <li className="grid-sizer" />
                    <li className="grid-item web branding design wow fadeInUp">
                      <a href="single-project-page-03.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Herbal Beauty Salon
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Identity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item web branding design wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <a href="single-project-page-04.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Tailoring Interior
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Brochure
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item advertising branding photography wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a href="single-project-page-05.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Pixflow Studio
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Identity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item web advertising design wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <a href="single-project-page-01.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Designblast Inc
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Web and Photography
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li className="grid-item web branding design wow fadeInUp">
                      <a href="single-project-page-02.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    HardDot Stone
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Identity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item web advertising branding design photography wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <a href="single-project-page-03.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Educamp School
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Identity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item web advertising branding design photography wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a href="single-project-page-04.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Third Eye Glasses
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Branding and Brochure
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li
                      className="grid-item web advertising branding design photography wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <a href="single-project-page-05.html">
                        <figure>
                          <div className="portfolio-img">
                            <img src="http://placehold.it/800x650" alt="" />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main text-center last-paragraph-no-margin">
                              <div className="portfolio-hover-box vertical-align-middle">
                                <div className="portfolio-hover-content position-relative">
                                  <span className="font-weight-600 alt-font text-uppercase margin-one-bottom display-block text-extra-dark-gray">
                                    Violator Series
                                  </span>
                                  <p className="text-medium-gray text-uppercase text-extra-small">
                                    Web and Photography
                                  </p>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="wow fadeIn">
            <div className="container">
              <div className="row equalize sm-equalize-auto">
                <div className="col-lg-6 col-md-6 col-sm-10 sm-center-col col-xs-12 display-table wow fadeIn last-paragraph-no-margin">
                  <div className="display-table-cell vertical-align-middle padding-seventeen-right sm-no-padding-lr sm-text-center sm-padding-30px-bottom">
                    <h6 className="text-extra-dark-gray font-weight-600 width-90 alt-font sm-width-100">
                      We provide high quality and cost effective services.
                    </h6>
                    <p className="width-90 margin-30px-bottom sm-width-100">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry. Lorem Ipsum has been the industry's standard dummy
                      text since. Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 sm-center-col col-xs-12 display-table sm-no-margin-bottom wow fadeIn">
                  <div className="display-table-cell vertical-align-middle">
                    <div className="skillbar-bar-main skillbar-bar-style1">
                      <div
                        className="skillbar margin-45px-bottom"
                        data-percent="92%"
                      >
                        <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">
                          Jquery - 4 years Experience
                        </span>
                        <p className="skillbar-bar" />
                        <span className="skill-bar-percent text-small" />
                      </div>
                      <div
                        className="skillbar margin-45px-bottom"
                        data-percent="97%"
                      >
                        <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">
                          Wordpress - 6 years Experience
                        </span>
                        <p className="skillbar-bar" />
                        <span className="skill-bar-percent text-small" />
                      </div>
                      <div
                        className="skillbar margin-45px-bottom"
                        data-percent="98%"
                      >
                        <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">
                          HTML5 - 5 years Experience
                        </span>
                        <p className="skillbar-bar" />
                        <span className="skill-bar-percent text-small" />
                      </div>
                      <div className="skillbar" data-percent="92%">
                        <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">
                          Photography - 6 years Experience
                        </span>
                        <p className="skillbar-bar" />
                        <span className="skill-bar-percent text-small" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="no-padding wow fadeIn bg-extra-dark-gray">
            <div className="container-fluid no-padding">
              <div className="row equalize no-margin">
                <div
                  className="col-md-6 col-sm-12 col-xs-12 position-relative sm-height-500px xs-height-350px cover-background wow fadeInLeft"
                  style={{
                    backgroundImage: `url('http://placehold.it/960x850')`
                  }}
                >
                  <div className="opacity-extra-medium bg-extra-dark-gray" />
                  <div className="bg-deep-pink width-50 text-center text-white padding-ten-all absolute-middle-center z-index-5 md-width-70 xs-width-85 xs-padding-twelve-tb xs-padding-five-lr">
                    <span className="special-char-medium text-white absolute-middle-center top-0 position-absolute fas fa-quote-left" />
                    <h6 className="font-weight-300 no-margin-bottom">
                      We design brand, digital experience & marketing campaigns
                      that engage the right customers.
                    </h6>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeInRight last-paragraph-no-margin sm-text-center">
                  <div className="display-table-cell vertical-align-middle padding-fifteen-all md-padding-ten-all sm-padding-90px-all xs-text-center xs-no-padding-lr xs-padding-40px-tb">
                    <span className="text-medium margin-10px-bottom display-block alt-font">
                      We create premium designs and technology
                    </span>
                    <h4 className="alt-font text-light-gray">
                      A digital studio crafting beautiful experiences.
                    </h4>
                    <p className="text-extra-large width-85 md-width-100">
                      We always stay on the cutting edge of digital, so that our
                      clients maintain their competitive advantage online.
                    </p>
                    <p className="width-85 md-width-100">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry. Lorem Ipsum is simply dummy text of the printing
                      and industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since. Lorem Ipsum has been the industry.
                      Lorem Ipsum is simply dummy text.
                    </p>
                    <a
                      href="home-creative-small-business.html"
                      className="btn btn-small margin-35px-top btn-white"
                    >
                      Start Your Business
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="no-padding wow fadeIn">
            <div className="container-fluid">
              <div className="row equalize feature-box-14">
                <div className="col-md-3 col-sm-6 col-xs-12 text-center display-table wow fadeInRight no-padding last-paragraph-no-margin">
                  <div className="display-table-cell vertical-align-middle padding-fifteen-all sm-padding-50px-all">
                    <h2 className="text-light-gray alt-font letter-spacing-minus-3 no-margin-bottom">
                      01
                    </h2>
                    <span className="display-block alt-font text-medium text-extra-dark-gray margin-15px-top margin-10px-bottom sm-margin-10px-top xs-margin-5px-bottom">
                      Discussion of the Idea
                    </span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard text.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center display-table wow fadeInRight no-padding last-paragraph-no-margin"
                  data-wow-delay="0.2s"
                >
                  <div className="display-table-cell vertical-align-middle padding-fifteen-all sm-padding-50px-all">
                    <h2 className="text-light-gray alt-font letter-spacing-minus-3 no-margin-bottom">
                      02
                    </h2>
                    <span className="display-block alt-font text-medium text-extra-dark-gray margin-15px-top margin-10px-bottom sm-margin-10px-top xs-margin-5px-bottom">
                      Elaboration of the Core
                    </span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard text.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center display-table wow fadeInRight no-padding last-paragraph-no-margin"
                  data-wow-delay="0.4s"
                >
                  <div className="display-table-cell vertical-align-middle padding-fifteen-all sm-padding-50px-all">
                    <h2 className="text-light-gray alt-font letter-spacing-minus-3 no-margin-bottom">
                      03
                    </h2>
                    <span className="display-block alt-font text-medium text-extra-dark-gray margin-15px-top margin-10px-bottom sm-margin-10px-top xs-margin-5px-bottom">
                      Handcrafted Templates
                    </span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard text.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center display-table wow fadeInRight no-padding last-paragraph-no-margin"
                  data-wow-delay="0.6s"
                >
                  <div className="display-table-cell vertical-align-middle padding-fifteen-all sm-padding-50px-all">
                    <h2 className="text-light-gray alt-font letter-spacing-minus-3 no-margin-bottom">
                      04
                    </h2>
                    <span className="display-block alt-font text-medium text-extra-dark-gray margin-15px-top margin-10px-bottom sm-margin-10px-top xs-margin-5px-bottom">
                      Testing for Perfection
                    </span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="parallax wow fadeIn "
            data-stellar-background-ratio="0.6"
            style={{ backgroundImage: `url('http://placehold.it/1920x1200')` }}
          >
            <div className="opacity-medium bg-extra-dark-gray" />
            <div className="container position-relative z-index-2">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 text-center center-col margin-seven-bottom xs-margin-40px-bottom">
                  <h4 className="alt-font text-light-gray width-90 center-col">
                    Powerful Website Builder
                  </h4>
                  <p className="text-large width-85 sm-width-100 font-weight-300 center-col">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6 text-center display-inline-block feature-box-9 xs-height-200px wow zoomIn">
                  <i className="icon-edit icon-large margin-20px-bottom text-deep-pink" />
                  <p className="alt-font text-medium text-light-gray">
                    Creative Elements
                  </p>
                  <div className="text-bottom-line border-color-deep-pink" />
                </div>
                <div
                  className="col-md-3 col-sm-3 col-xs-6 text-center display-inline-block feature-box-9 xs-height-200px wow zoomIn"
                  data-wow-delay="0.2s"
                >
                  <i className="icon-tools-2 icon-large margin-20px-bottom text-deep-pink" />
                  <p className="alt-font text-medium text-light-gray">
                    Smart Shortcodes
                  </p>
                  <div className="text-bottom-line border-color-deep-pink" />
                </div>
                <div
                  className="col-md-3 col-sm-3 col-xs-6 text-center display-inline-block feature-box-9 xs-height-200px wow zoomIn"
                  data-wow-delay="0.4s"
                >
                  <i className="icon-expand icon-large margin-20px-bottom text-deep-pink" />
                  <p className="alt-font text-medium text-light-gray">
                    Unlimited Layouts
                  </p>
                  <div className="text-bottom-line border-color-deep-pink" />
                </div>
                <div
                  className="col-md-3 col-sm-3 col-xs-6 text-center display-inline-block feature-box-9 xs-height-200px wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <i className="icon-scissors icon-large margin-20px-bottom text-deep-pink" />
                  <p className="alt-font text-medium text-light-gray">
                    Shortcode Panel
                  </p>
                  <div className="text-bottom-line border-color-deep-pink" />
                </div>
              </div>
            </div>
          </section>
          <section id="team" className="wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">
                    Creative People
                  </h5>
                  <p className="no-margin-bottom">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since. Lorem Ipsum has been the
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp">
                  <figure>
                    <div className="team-image xs-width-100">
                      <img src="http://placehold.it/700x892" alt="" />
                      <div className="team-overlay bg-deep-pink" />
                      <div className="team-member-position text-center margin-25px-top">
                        <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">
                          Herman Miller
                        </div>
                        <div className="text-extra-small text-uppercase text-medium-gray">
                          Co-Founder / Design
                        </div>
                      </div>
                    </div>
                    <figcaption>
                      <div className="overlay-content text-center icon-social-small">
                        <span className="text-small display-inline-block no-margin">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry dummy text.
                        </span>
                        <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
                        <a
                          href="http://www.facebook.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="http://www.twitter.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="jhttp://plus.google.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a
                          href="jhttp://www.instagram.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp"
                  data-wow-delay="0.2s"
                >
                  <figure>
                    <div className="team-image xs-width-100">
                      <img src="http://placehold.it/700x892" alt="" />
                      <div className="team-overlay bg-deep-pink" />
                      <div className="team-member-position text-center margin-25px-top">
                        <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">
                          Jeremy Dupont
                        </div>
                        <div className="text-extra-small text-uppercase text-medium-gray">
                          Creative Director
                        </div>
                      </div>
                    </div>
                    <figcaption>
                      <div className="overlay-content text-center icon-social-small">
                        <span className="text-small display-inline-block no-margin">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry dummy text.
                        </span>
                        <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
                        <a
                          href="http://www.facebook.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="http://www.twitter.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="jhttp://plus.google.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a
                          href="jhttp://www.instagram.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp"
                  data-wow-delay="0.4s"
                >
                  <figure>
                    <div className="team-image xs-width-100">
                      <img src="http://placehold.it/700x892" alt="" />
                      <div className="team-overlay bg-deep-pink" />
                      <div className="team-member-position text-center margin-25px-top">
                        <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">
                          Sara Smith
                        </div>
                        <div className="text-extra-small text-uppercase text-medium-gray">
                          Creative Studio Head
                        </div>
                      </div>
                    </div>
                    <figcaption>
                      <div className="overlay-content text-center icon-social-small">
                        <span className="text-small display-inline-block no-margin">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry dummy text.
                        </span>
                        <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
                        <a
                          href="http://www.facebook.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="http://www.twitter.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://plus.google.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a
                          href="http://www.instagram.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 wow slideInUp"
                  data-wow-delay="0.6s"
                >
                  <figure>
                    <div className="team-image xs-width-100">
                      <img src="http://placehold.it/700x892" alt="" />
                      <div className="team-overlay bg-deep-pink" />
                      <div className="team-member-position text-center margin-25px-top">
                        <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">
                          Bill Gardner
                        </div>
                        <div className="text-extra-small text-uppercase text-medium-gray">
                          Co-Founder / Design
                        </div>
                      </div>
                    </div>
                    <figcaption>
                      <div className="overlay-content text-center icon-social-small">
                        <span className="text-small display-inline-block no-margin">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry dummy text.
                        </span>
                        <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
                        <a
                          href="http://www.facebook.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="http://www.twitter.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://plus.google.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a
                          href="http://www.instagram.com"
                          className="text-extra-dark-gray"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section id="blog" className="bg-light-gray wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">
                    Recent Blog
                  </h5>
                  <p className="no-margin-bottom">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since. Lorem Ipsum has been the
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 no-padding xs-padding-15px-lr">
                  <ul className="blog-grid blog-3col gutter-large blog-post-style5">
                    <li className="grid-sizer" />
                    <li className="grid-item wow fadeInUp last-paragraph-no-margin">
                      <div className="blog-post bg-white">
                        <div className="blog-post-images overflow-hidden">
                          <a href="blog-post-layout-01.html">
                            <img src="http://placehold.it/900x650" alt="" />
                          </a>
                          <div className="blog-categories bg-white text-uppercase text-extra-small alt-font">
                            <a href="blog-masonry.html">Graphic Design</a>
                          </div>
                        </div>
                        <div className="post-details inner-match-height padding-40px-all sm-padding-20px-all xs-padding-30px-tb">
                          <div className="blog-hover-color" />
                          <a
                            href="blog-post-layout-01.html"
                            className="alt-font post-title text-medium text-extra-dark-gray display-block md-width-100 margin-5px-bottom"
                          >
                            I like the body. I like to design everything to do
                            with the body.
                          </a>
                          <div className="author">
                            <span className="text-medium-gray text-uppercase text-extra-small display-inline-block">
                              by{" "}
                              <a
                                href="blog-masonry.html"
                                className="text-medium-gray"
                              >
                                Jay Benjamin
                              </a>
                              &nbsp;&nbsp;|&nbsp;&nbsp;20 April 2017
                            </span>
                          </div>
                          <div className="separator-line-horrizontal-full bg-medium-gray margin-20px-tb" />
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum standard dummy...
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="grid-item wow fadeInUp last-paragraph-no-margin"
                      data-wow-delay="0.2s"
                    >
                      <div className="blog-post bg-white">
                        <div className="blog-post-images overflow-hidden">
                          <a href="blog-post-layout-02.html">
                            <img src="http://placehold.it/900x650" alt="" />
                          </a>
                          <div className="blog-categories bg-white text-uppercase text-extra-small alt-font">
                            <a href="blog-masonry.html">Graphic Design</a>
                          </div>
                        </div>
                        <div className="post-details inner-match-height padding-40px-all sm-padding-20px-all xs-padding-30px-tb">
                          <div className="blog-hover-color" />
                          <a
                            href="blog-post-layout-02.html"
                            className="alt-font post-title text-medium text-extra-dark-gray display-block md-width-100 margin-5px-bottom"
                          >
                            Recognizing the need is the primary condition for
                            design.
                          </a>
                          <div className="author">
                            <span className="text-medium-gray text-uppercase text-extra-small display-inline-block">
                              by{" "}
                              <a
                                href="blog-masonry.html"
                                className="text-medium-gray"
                              >
                                Jay Benjamin
                              </a>
                              &nbsp;&nbsp;|&nbsp;&nbsp;20 April 2017
                            </span>
                          </div>
                          <div className="separator-line-horrizontal-full bg-medium-gray margin-20px-tb" />
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum standard dummy...
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="grid-item wow fadeInUp last-paragraph-no-margin"
                      data-wow-delay="0.4s"
                    >
                      <div className="blog-post bg-white">
                        <div className="blog-post-images overflow-hidden">
                          <a href="blog-post-layout-03.html">
                            <img src="http://placehold.it/900x650" alt="" />
                          </a>
                          <div className="blog-categories bg-white text-uppercase text-extra-small alt-font">
                            <a href="blog-masonry.html">Web Design</a>
                          </div>
                        </div>
                        <div className="post-details inner-match-height padding-40px-all sm-padding-20px-all xs-padding-30px-tb">
                          <div className="blog-hover-color" />
                          <a
                            href="blog-post-layout-03.html"
                            className="alt-font post-title text-medium text-extra-dark-gray display-block md-width-100 margin-5px-bottom"
                          >
                            Styles come and go. Design is a language, not a style.
                          </a>
                          <div className="author">
                            <span className="text-medium-gray text-uppercase text-extra-small display-inline-block">
                              by{" "}
                              <a
                                href="blog-masonry.html"
                                className="text-medium-gray"
                              >
                                Jay Benjamin
                              </a>
                              &nbsp;&nbsp;|&nbsp;&nbsp;20 April 2017
                            </span>
                          </div>
                          <div className="separator-line-horrizontal-full bg-medium-gray margin-20px-tb" />
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum standard dummy...
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            id="clients"
            className="parallax wow fadeIn"
            data-stellar-background-ratio="0.4"
            style="background-image:url('http://placehold.it/1920x1200');"
          >
            <div className="opacity-medium bg-extra-dark-gray" />
            <div className="container text-center">
              <div className="row">
                <div className="swiper-slider-clients swiper-container white-move">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo1.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo2.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo3.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo4.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo1.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo2.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo3.png" alt="" />
                    </div>
                    <div className="swiper-slide text-center">
                      <img src="images/clients-logo4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wow fadeIn">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">
                    What People Say
                  </h5>
                  <p className="no-margin-bottom">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since. Lorem Ipsum has been the
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 sm-margin-four-bottom text-center xs-margin-30px-bottom wow fadeInRight last-paragraph-no-margin">
                  <img
                    src="http://placehold.it/149x149"
                    className="border-radius-100 width-30 margin-30px-bottom xs-margin-15px-bottom xs-width-100px"
                    alt=""
                  />
                  <p className="width-90 center-col sm-width-90 xs-width-100">
                    Their team are easy to work with and helped me make amazing
                    websites in a short amount of time. Thanks guys for all your
                    hard work.
                  </p>
                  <i className="fas fa-quote-left icon-small text-deep-pink display-block margin-30px-top margin-15px-bottom xs-margin-15px-top" />
                  <span className="text-extra-dark-gray font-weight-600 text-small text-uppercase display-block line-height-10 alt-font">
                    Shoko Mugikura
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Design Manager
                  </span>
                </div>
                <div
                  className="col-md-4 col-sm-4 col-xs-12 sm-margin-four-bottom text-center xs-margin-30px-bottom wow fadeInRight last-paragraph-no-margin"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="http://placehold.it/149x149"
                    className="border-radius-100 width-30 margin-30px-bottom xs-margin-15px-bottom xs-width-100px"
                    alt=""
                  />
                  <p className="width-90 center-col sm-width-90 xs-width-100">
                    Trust us we looked for a very long time and wasted thousands
                    of dollars testing other teams, freelancers, and outsource
                    companies.
                  </p>
                  <i className="fas fa-quote-left icon-small text-deep-pink display-block margin-30px-top margin-15px-bottom xs-margin-15px-top" />
                  <span className="text-extra-dark-gray font-weight-600 text-small text-uppercase display-block line-height-10 alt-font">
                    Alexander Smith
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Co Founder / CEO
                  </span>
                </div>
                <div
                  className="col-md-4 col-sm-4 col-xs-12 sm-margin-four-bottom text-center wow fadeInRight last-paragraph-no-margin xs-no-margin-bottom"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="http://placehold.it/149x149"
                    className="border-radius-100 width-30 margin-30px-bottom xs-margin-15px-bottom xs-width-100px"
                    alt=""
                  />
                  <p className="width-90 center-col sm-width-90 xs-width-100">
                    This is an excellent company! I personally enjoyed the energy
                    and the professional support the whole team gave to us into
                    creating website.
                  </p>
                  <i className="fas fa-quote-left icon-small text-deep-pink display-block margin-30px-top margin-15px-bottom xs-margin-15px-top" />
                  <span className="text-extra-dark-gray font-weight-600 text-small text-uppercase display-block line-height-10 alt-font">
                    Lindsay Swanson
                  </span>
                  <span className="text-light-gray2 text-extra-small text-uppercase text-medium-gray">
                    Creative Director
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="wow fadeIn no-padding bg-extra-dark-gray"
          >
            <div className="container-fluid">
              <div className="row equalize sm-equalize-auto">
                <div
                  className="col-md-6 col-sm-12 col-xs-12 cover-background sm-height-550px xs-height-350px wow fadeIn"
                  style={{ background: `url(http://placehold.it/1200x854)` }}
                />
                <div className="col-md-6 col-sm-12 col-xs-12 wow fadeIn">
                  <div className="padding-eleven-all text-center xs-no-padding-lr">
                    <div className="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom xs-margin-three-bottom">
                      Fill out the form and we'll be in touch soon!
                    </div>
                    <h5 className="margin-55px-bottom text-white alt-font font-weight-600 text-uppercase sm-margin-30px-bottom xs-margin-15px-bottom">
                      Ready to request a quote?
                    </h5>
                    <div>
                      <form
                        id="contact-form"
                        action="javascript:void(0)"
                        method="post"
                      >
                        <div id="success-contact-form" className="no-margin-lr" />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name*"
                          className="input-border-bottom"
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="E-mail*"
                          className="input-border-bottom"
                        />
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          className="input-border-bottom"
                        />
                        <textarea
                          name="comment"
                          id="comment"
                          placeholder="Your Message"
                          className="input-border-bottom"
                        />
                        <button
                          id="contact-us-button"
                          type="submit"
                          className="btn btn-small btn-deep-pink margin-30px-top sm-margin-10px-top xs-margin-three-top"
                        >
                          send message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wow fadeIn border-bottom border-color-extra-light-gray">
            <div className="container">
              <div className="row sm-col-2-nth">
                <div className="col-md-3 col-sm-6 col-xs-12 text-center sm-margin-50px-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
                  <i className="icon-map-pin icon-medium margin-25px-bottom xs-margin-10px-bottom" />
                  <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                    Visit Our Office
                  </div>
                  <p className="width-70 md-width-85 sm-width-50 xs-width-60 xs-margin-10px-bottom center-col">
                    401 Broadway, 24th Floor New York, NY 10013.
                  </p>
                  <a
                    href="contact-us-classNameic-02.html"
                    className="margin-15px-top text-decoration-line-through-deep-pink display-inline-block text-uppercase text-deep-pink text-small xs-no-margin-top"
                  >
                    GET DIRECTION
                  </a>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center sm-margin-50px-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.2s"
                >
                  <i className="icon-chat icon-medium margin-25px-bottom xs-margin-10px-bottom" />
                  <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                    Let's Talk
                  </div>
                  <p className="width-70 md-width-85 sm-width-50 xs-width-60 xs-margin-10px-bottom center-col">
                    Phone: 1-800-222-000
                    <br />
                    Fax: 1-800-222-002
                  </p>
                  <a
                    href="contact-us-classNameic.html"
                    className="margin-15px-top text-decoration-line-through-deep-pink display-inline-block text-uppercase text-deep-pink text-small xs-no-margin-top"
                  >
                    call us
                  </a>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.4s"
                >
                  <i className="icon-envelope icon-medium margin-25px-bottom xs-margin-10px-bottom" />
                  <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                    E-mail Us
                  </div>
                  <p className="width-70 md-width-85 sm-width-50 xs-width-60 xs-margin-10px-bottom center-col">
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                    <br />
                    <a href="mailto:hr@yourdomain.com">hr@yourdomain.com</a>
                  </p>
                  <a
                    href="contact-us-classNameic-02.html"
                    className="margin-15px-top text-decoration-line-through-deep-pink display-inline-block text-uppercase text-deep-pink text-small xs-no-margin-top"
                  >
                    send e-mail
                  </a>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp last-paragraph-no-margin"
                  data-wow-delay="0.6s"
                >
                  <i className="icon-megaphone icon-medium margin-25px-bottom xs-margin-10px-bottom" />
                  <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                    Customer Services
                  </div>
                  <p className="width-70 md-width-85 sm-width-50 xs-width-60 xs-margin-10px-bottom center-col">
                    Lorem Ipsum is simply dummy text of the printing.
                  </p>
                  <a
                    href="contact-us-classNameic-02.html"
                    className="margin-15px-top text-decoration-line-through-deep-pink display-inline-block text-uppercase text-deep-pink text-small xs-no-margin-top"
                  >
                    open ticket
                  </a>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer-strip padding-50px-tb xs-padding-30px-tb bg-light-gray">
            <div className="container">
              <div className="row equalize xs-equalize-auto">
                <div className="col-md-3 col-sm-3 col-xs-12 display-table sm-text-center xs-margin-20px-bottom">
                  <div className="display-table-cell vertical-align-middle">
                    <a href="index.html">
                      <img
                        className="footer-logo"
                        src="images/logo.png"
                        data-rjs="images/logo@2x.png"
                        alt="hemant"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 text-center text-small alt-font display-table xs-margin-10px-bottom sm-text-center">
                  <div className="display-table-cell vertical-align-middle">
                    &copy; 2017 hemant is Proudly Powered by{" "}
                    <a
                      href="http://www.themezaa.com"
                      target="_blank"
                      title="ThemeZaa"
                    >
                      ThemeZaa
                    </a>
                    .
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 display-table  text-right sm-text-center">
                  <div className="display-table-cell vertical-align-middle">
                    <div className="social-icon-style-8 display-inline-block vertical-align-middle">
                      <ul className="small-icon no-margin-bottom">
                        <li>
                          <a
                            className="facebook text-extra-dark-gray"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter text-extra-dark-gray"
                            href="https://twitter.com/"
                            target="_blank"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="google text-extra-dark-gray"
                            href="https://plus.google.com"
                            target="_blank"
                          >
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="dribbble text-extra-dark-gray"
                            href="https://dribbble.com/"
                            target="_blank"
                          >
                            <i
                              className="fab fa-dribbble no-margin-right"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin text-extra-dark-gray"
                            href="https://linkedin.com/"
                            target="_blank"
                          >
                            <i
                              className="fab fa-linkedin-inno-margin-right"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
  );
}
}
export default Home;
