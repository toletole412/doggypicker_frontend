import request from 'superagent'

const dogUrl = 'https://dog.ceo/dog-api/breeds-image-random.php'


export const FETCHED_RANDOM_DOG = 'FETCHED_RANDOM_DOGS'

export const fetchRandomDog = () => (dispatch) => { console.log("im here")
  request
    .get(`${dogUrl}`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_DOG,
      payload: response.body.RandomDog
    }))
    .catch(err => alert(err))
}
