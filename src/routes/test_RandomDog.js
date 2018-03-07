import React from 'react';
import { fetchRandomDog } from '../actions/showAllDog'
import AllDogs from '../components/Alldogs'
import PropTypes from 'prop-types'



export default class RandomDog extends React.Component {
  static propTypes = {
    fetchRandomDog: PropTypes.func.isRequired
  }


  render() {
    return (
      <div>
        <AllDogs />
      </div>
    );
  }
}
