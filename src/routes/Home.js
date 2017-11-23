import React from 'react';
import Sidebar from './Sidebar';
import './Styles.css'



export default class Home extends React.Component {
  render() {
    return (
        <div id="outer-container">
          <Sidebar pageWrapId={"page-wrap"}
                   outerContainerId={"outer-container"} />

          <div class="desc-wrapper">
            <p>South Korea, Odae mt.</p>
          </div>
        </div>
    );
  }
}
