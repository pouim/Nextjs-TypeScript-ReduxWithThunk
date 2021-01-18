import { createStore, combineReducers, applyMiddleware } from 'redux'

import announcementReducer from './announcement';



const rootReducer = combineReducers({
    announcement: announcementReducer,
});

export default rootReducer;