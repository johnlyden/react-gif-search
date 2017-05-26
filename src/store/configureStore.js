import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            // If it receives a promise, it will dispatch the resolved value of the promise. 
            // It will not dispatch anything if the promise rejects.
            applyMiddleware(ReduxPromise),
            window.devToolsExtension ? window.devToolsExtension() : undefined
        )
    );

    if (module.hot) {
        // enable webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}