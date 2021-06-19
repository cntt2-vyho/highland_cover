import {createStore, applyMiddleware} from 'redux';

import thunk from "redux-thunk";
import allReducer from './reducers';

const store = createStore(allReducer, applyMiddleware(thunk));

// store.subscribe(function () {
//     console.log(store.getState());
// })

export default store;