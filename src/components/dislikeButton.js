import React from 'react'
import '../routes/Styles.css';



class DislikeButton extends React.Component {
  _refreshPage() {
      window.location.reload();
    }

  render() {
    return ( < button
                className = "thumbsDown"
                onClick = {this._refreshPage} > Next </button> )
  }
}

export default DislikeButton
