import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="#">Tadious Bohwasi</a></h1>
              <h6>Software Developer and Srum Master</h6>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills Matrix</a></li>
                  <li><a href="#services" data-nav-section="services">Expertise</a></li>
                  <li><a href="#experience" data-nav-section="experience">Career Timeline</a></li>
                  {/*<li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/tadious-bohwasi-37804015/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" />&nbsp;linkedin</a></li>
                <li><a href="https://github.com/tadious" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>&nbsp;gitgub</a></li>
                <li><a href="https://www.facebook.com/tadious" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" />&nbsp;facebook</a></li>
                <li><a href="https://twitter.com/tbohwasi" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" />&nbsp;twitter</a></li>
                <li><a href="https://www.instagram.com/tadiousb" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" />&nbsp;instagram</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
