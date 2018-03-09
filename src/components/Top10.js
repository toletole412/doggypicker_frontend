import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchGetAllDog } from '../actions/top10'
import { fetchGetUsers } from '../actions/top10'



class Top10 extends React.Component {
  static propTypes = {
    fetchGetAllDog: PropTypes.func.isRequired,
    fetchGetUsers: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchGetAllDog()
    this.props.fetchGetUsers()
  }

  renderDoggo(dog, idx) {
    return (
      <p key={idx}>{ dog.id } { dog.breed } { dog.userId} { dog.name }</p>
    )
  }


  render() {
    const {top10} = this.props

    return (
      <div>
        { this.props.top10.map((dog, idx) => this.renderDoggo(dog, idx)) }
      </div>
    )
  }
}


const mapStateToProps = ({ top10 }) => ({ top10 })

export default connect(mapStateToProps, { fetchGetAllDog, fetchGetUsers })(Top10)
