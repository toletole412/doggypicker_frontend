import request from 'superagent'

const dogUrl = 'https://dog.ceo/dog-api/breeds-image-random.php'


export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'

export const fetchAllProducts = () => (dispatch) => { console.log("im here")
  request
    .get(`${dogUrl}`)
    .then(response => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: response.body.allDogs
    })console.log(response.body))
    .catch(err => alert(err))
}
