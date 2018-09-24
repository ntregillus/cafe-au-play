import moment from 'moment';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_DATE_RANGE = 'SET_DATE_RANGE';

const dateFilters = (state = {
    startDate: moment().startOf('month').toISOString(), 
    endDate: moment().startOf('month').add(1, 'month').toISOString()
}, action) => {
    let result = {...state};

    switch(action.type) {
        case SET_START_DATE:
            result.startDate = action.startDate;
            return result;
        case SET_END_DATE:
            result.endDate = action.endDate;
            return result;
        case SET_DATE_RANGE:
            result.startDate = action.startDate;
            result.endDate = action.endDate;
            return result;
        default:
            return state;
    }
};

export default dateFilters;