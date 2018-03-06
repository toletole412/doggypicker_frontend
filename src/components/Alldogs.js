import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchAllProducts } from '../actions/showAllDog'
import {Link} from 'react-router-dom'



class AllDogs extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      fetchAllProducts: PropTypes.func.isRequired
    })).isRequired
  }

  componentWillMount() {
    console.log("im confusing")
    this.props.fetchAllProducts()
  }


  render() {
    const {allDogs} = this.props
    return (
      <div>
        <h1>All dogs</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { allDogs.map(dog => (
              <tr key={dog.id}>
              <td>{dog.id}</td>
              <td>
                <Link to={ `/allDogs/${dog.id}` }>{dog.name}</Link>
              </td>
              <td>{dog.image}</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    allDogs: state.allDogs
  }
}

export default connect(mapStateToProps, { fetchAllProducts })(AllDogs)
