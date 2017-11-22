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
            <img src="https://pixabay.com/get/eb30b20720f3093ed1584d05fb0938c9bd22ffd41cb0104092f5c371a0/candy-2538878_1280.jpg" />
          </main>
        </div>
    );
  }
}
