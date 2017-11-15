import React, {Component} from 'react';
import Sidebar from './Sidebar';
import './Styles.css';
import Grid2 from './Grid_developer';





export default class developer extends React.Component {

  render() {
    return (
        <div id="outer-container">
          <Sidebar pageWrapId={"page-wrap"}
                 outerContainerId={"outer-container"} />
          <main id="page-wrap">
            <div id="page" class="hfeed site">
              <header id="masthead" class="site-header" role="banner">
                <div class="site-branding annCenter">
                  <p class="site-title">
                    <a href="/" rel="home">
                    toretore </a>
                  </p>
                  <p class="site-description">developer</p>
                </div>
              </header>
              <div id="content" class="site-content">
                <section id="primary" class="content-area">
                  <Grid2 />
                </section>
              </div>
            </div>
          </main>
        </div>
    );
  }
}
