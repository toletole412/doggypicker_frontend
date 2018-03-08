import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchRandomDog } from '../actions/showAllDog'



class AllDogs extends React.Component {
  static propTypes = {
    fetchRandomDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchRandomDog()
  }

  render() {
    const {dogs} = this.props

    return (
      <div>
        <img className="doggy_picture"
         src= {dogs.url}
         alt="first_dog_picture" />
      </div>
    )
  }
}


const mapStateToProps = ({ dogs }) => ({ dogs })

export default connect(mapStateToProps, { fetchRandomDog })(AllDogs)

AllDogs.defaultProps = {
  dogs: {
    id: 1,
    url: 'http://some.dog.com/wow-such-dog.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
