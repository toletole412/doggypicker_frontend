// src/components/Player.js
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleLike } from '../actions/toggle-like'
import UpButton from './thumbsUpButton'
import '../routes/Styles.css'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

export class Dog extends React.Component {
  static propTypes = {
    ...playerShape.isRequired,
    onChange: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { id, onChange } = this.props
    onChange(id)
  }

  render() {
    const { url, score } = this.props

    return (
      <li className="Dog">
        <p className="url">{url}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.toggleLike} />
      </li>
    )
  }
}

export default connect(null, { onChange: toggleLike })(Dogs)
