
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTs';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

const eventReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_EVENT:
            return [...state, action.event];
        case ADD_EVENTS:
            return [...state, ...action.events];
        case REMOVE_EVENT:
            return state.filter(item => item.id !== action.id);
        case SET_EVENTS:
            return action.events || [];
        default:
            return state;
    }
};

export default eventReducer;