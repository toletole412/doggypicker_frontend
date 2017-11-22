import React from 'react';
import Sidebar from './Sidebar';
import './Styles.css';
import Grid from './Grid_daily';





export default class daily extends React.Component {

  render() {

    return (
        <div id="outer-container">
          <Sidebar pageWrapId={"page-wrap"}
                 outerContainerId={"outer-container"} />
          <main id="page-wrap">
            <div id="page" class="hfeed site">
              <header id="masthead" class="site-header" role="banner">
                <div class="site-branding annCenter">
                  <h2 class="site-title">
                    <a href="/" rel="home">
                    toretore</a>
                  </h2>
                  <p class="site-description"><strong>daily life</strong></p>
                </div>
              </header>
              <div id="content" class="site-content">
                <section id="primary" class="content-area">
                  <Grid />
                </section>
              </div>
            </div>
          </main>
        </div>
    );
  }
}
