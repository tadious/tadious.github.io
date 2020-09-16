import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Innovative Solutions</h3>
                  <p>Have the experience of solving complex problems across several industries over the years.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-code" />
                </span>
                <div className="desc">
                  <h3>Clean Code</h3>
                  <p>Have an appreciation for maintainable code and have implemented measures to minimize technical debt.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Multiple Technologies and Platforms</h3>
                  <p>Experience with several languages, technology stacks and platforms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-layers2" />
                </span>
                <div className="desc">
                  <h3>Agile Methodologies</h3>
                  <p>With experience as a Scrum Master, I also focus on team deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};