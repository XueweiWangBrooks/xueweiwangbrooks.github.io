import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/head.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Xuewei Wang</a></h1>
              <span className="email"><i className="icon-mail"></i> wangxuewei1234@gmail.com<br></br>
              <i className="icon-mail"></i> x_wang@berkeley.edu<br></br>
              Berkeley, CA</span>
              <br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Front Cover</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/XueweiWangBrooks" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> and <a href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a> <br></br>for inspiration.
                  <br/>Webpage icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
