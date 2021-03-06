import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import eventReducer from '../reducers/events';
import dateFilersReducer from '../reducers/dateFilters';
import { LoadMonthsEvents } from '../actions/events';

/// setting up fail over logic if we do not have the redux dev
/// tools installed! if the redux tools are not installed, 
/// compose is used
const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;


export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
            events: eventReducer,
            dateFilters: dateFilersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    var initState = store.getState();
    store.dispatch(LoadMonthsEvents(initState.dateFilters.startDate, initState.dateFilters.endDate));
    return store;
};
