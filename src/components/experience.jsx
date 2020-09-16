import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-banknote" />
                      </div>
                      <div className="timeline-label">
                        <h2>Backend Developer and Scrum Master at Advisa&nbsp;<span>2016-present</span></h2>
                        <p>Advisa is on for the leading loan comparison products in Sweden and recently expanding to other Nordic countries. I joined as a backend developer working with NodeJS, MySQL, Docker, RabbitMQ, and Redis running on AWS to deliver APIs to our REACT and AngulaJS frontend systems. The development team has since grown and I have taken on a role as Developer and Scrum Master working with Agile Methodologies to ensure our teams deliver efficiently.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-calendar3" />
                      </div>
                      <div className="timeline-label">
                        <h2>PHP Developer at Quinyx<span>2015-2016</span></h2>
                        <p>Quinyx is one of the biggest Workforce Management Solutions in Europe and the Nordic region with over 200000 monthly active users across different timezones. My role at Quinyx is to help design and implement new features while upgrading our legacy code base to ensure product scalability.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-data" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Balancell&nbsp;<span>2014-2015</span></h2>
                        <p>Balancell is an engineering start-up company in Cape Town, South Africa looking to improve industrial battery usage. Battery usage is monitored using modules designed by Balancell, which send minutely datagrams to a server. My role was to help design and build a system that processes the resulting datagrams, create read models and tools to visualise the data in the form of graphs, warnings and notifications.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web and Mobile Developer at RightShift&nbsp;<span>2009-2014</span></h2>
                        <p>RightShift designs, builds and supports social web and mobile products. During my time there, RightShift built three social slot machine applications that served about 2 million monthly users and traffic volumes of up to 6 million transactions a day. My role was to help with  architecture and database design, develop a robust and scalable object oriented PHP code base. I have the opportunity to deliver across the entire application life cycle, – concept, design, build, deploy, test, release to app stores and support, and created compelling device specific user interfaces and experiences.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.Sc Computer Engineering at University of Cape Town&nbsp;<span>2003-2006</span></h2>
                        <p>In 2003, I started a Bachelor of Science degree at the University of Cape Town, majoring in Computer and Electrical Engineering.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
