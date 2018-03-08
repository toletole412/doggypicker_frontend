import request from 'superagent'

const baseUrl = 'http://localhost:4001/dogs'

export const TOGGLE_LIKE = 'TOGGLE_LIKE'


export const toggleLike = (dog) => (dispatch) => {
  request
    .patch(`${baseUrl}/${1}`)
    .send({ url: dog.url })
    .then((response) => (dispatch) => {
      type: TOGGLE_LIKE
    })
}
