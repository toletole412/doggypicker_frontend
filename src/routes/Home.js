import React from 'react';
import Sidebar from './Sidebar';
import './Styles.css'



export default class Home extends React.Component {
  render() {
    return (
        <div id="outer-container">
          <Sidebar pageWrapId={"page-wrap"}
                   outerContainerId={"outer-container"} />
          <main id="page-wrap">

            <h1>Welcome!</h1>
            <img src="http://imagizer.imageshack.us/v2/280x200q90/922/mVDrPl.jpg" />
          </main>
        </div>
    );
  }
}
