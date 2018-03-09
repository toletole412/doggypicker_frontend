import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'



export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'


export const login = (name, password) => (dispatch) => {
	request
		.post(`${baseUrl}/login`)
    .send({ name, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    .catch(err => {
	if (err.status === 400) {
		dispatch({
			type: USER_LOGIN_FAILED,
			payload: err.response.body.message || 'Unknown error'
		})
	}
	else {
		console.error(err)
	}
})
})
}
