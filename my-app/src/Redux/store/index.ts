import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware: Middleware<any, any, any>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = () => {

    const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

    return store;
};

export type RootState = ReturnType<typeof rootReducer>


export const wrapper = createWrapper(makeStore, { debug: true });
