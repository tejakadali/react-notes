import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import { loadState,saveState } from '../_helpers'

const loggerMiddleware = createLogger();

const persistedState = loadState();


const middleware = [
    thunkMiddleware,
    process.env.NODE_ENV == "development" && loggerMiddleware,
].filter(Boolean);
const createStoreWithMiddleware = applyMiddleware(...middleware);

export const store = createStore(
    rootReducer,
    persistedState,
    createStoreWithMiddleware
);


store.subscribe(() => {
    saveState({
        notes: store.getState().notes
    });
});


