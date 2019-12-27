import {createStore, applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// create the sage middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(sagaMiddleware)))

    sagaMiddleware.run(rootSaga)
export default store