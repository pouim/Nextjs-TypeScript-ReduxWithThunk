export const UPDATE_ANNOUNCEMENT = '[Announcement] update'
import { Dispatch } from 'redux';

export const updateAnnouncement = (message: string) => dispatch => {
  return dispatch({ type: UPDATE_ANNOUNCEMENT, message })
}