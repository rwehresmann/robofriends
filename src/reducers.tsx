import { ISetSearchField, RequestRobots } from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
  
const initialStateSearch = {
  searchField: ''
}

// TODO: Type the initial state
export const searchRobots = (state=initialStateSearch, action: ISetSearchField) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}

const initialStateRequestRobots = {
  robots: [],
  isPending: true
}

// TODO: Type the initial state
export const requestRobots = (state=initialStateRequestRobots, action: RequestRobots) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload }
    default:  
      return state
  }
}