import {FETCHED_GETALL_DOG, FETCHED_GET_USERS} from '../actions/top10'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case FETCHED_GETALL_DOG:
        return state.concat(payload)
      case FETCHED_GET_USERS:
          return state.concat(payload)
      default:
        return state
    }
  }
