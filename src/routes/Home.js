import React from 'react';
import Sidebar from './Sidebar';
import './Styles.css'



export default class Home extends React.Component {
  render() {
    return (
        <div id="outer-container">

          <ul class="cb-slideshow">
            <li>
              <span>dsds</span>
              <div>
                <h1>South Korea,<br />Odae Mt</h1>
              </div>
            </li>
            <li>
              <span>dsds</span>
            </li>
            <li>
              <span>dsds</span>
            </li>
            <li>
              <span>dsds</span>
            </li>
            <li>
              <span>dsds</span>
            </li>
            <li>
              <span>dsds</span>
            </li>
          </ul>
          <Sidebar pageWrapId={"page-wrap"}
                   outerContainerId={"outer-container"} />
        </div>
    );
  }
}
