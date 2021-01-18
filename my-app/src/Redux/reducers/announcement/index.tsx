import { IAnnouncement } from "../../state";
import * as announcementActions from "../../actions/announcement/actions";

const initialState: IAnnouncement = {
  message: "No announcement...",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
