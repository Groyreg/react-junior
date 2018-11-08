import { SET_YEAR, GET_PHOTOS_SUCCESS, GET_PHOTOS_REQUEST } from '../actions/constants'

export const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }
    default:
      return state
  }
}
