
import { apiCall } from './api/api'
import * as constants from './constants'
import { IRobot } from './types/index'
import { Dispatch } from 'redux'

export interface ISetSearchField {
  type: constants.CHANGE_SEARCHFIELD;
  payload: string;
}

export const setSearchField = (text: string): ISetSearchField => ({ type: constants.CHANGE_SEARCHFIELD, payload: text })

interface IRequestRobotsPending {
  type: constants.REQUEST_ROBOTS_PENDING
}

interface IRequestRobotsSuccess {
  type: constants.REQUEST_ROBOTS_SUCCESS,
  payload: IRobot[]
}

interface IRequestRobotsFailed {
  type: constants.REQUEST_ROBOTS_FAILED,
  payload: string
}

export type RequestRobots = IRequestRobotsPending | IRequestRobotsSuccess | IRequestRobotsFailed 

export const requestRobots = () => (dispatch: Dispatch<IRequestRobotsPending | IRequestRobotsSuccess | IRequestRobotsFailed>) => {
  dispatch({ type: constants.REQUEST_ROBOTS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: constants.REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: constants.REQUEST_ROBOTS_FAILED, payload: error }))
}