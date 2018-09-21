import * as actionTypes from '../reducers/events';
import moment from 'moment';

export const LoadMonthsEvents = (startDate, endDate) => {
    const start = (startDate) ? moment(startDate).toISOString() : moment().startOf('month').toISOString();
    const end = (endDate) ? moment(endDate).toISOString() : moment().endOf('month').add(1, 'days').toISOString();
    return (dispatch) => {
        dispatch(LoadGoogleCalendarEvents(start, end));
    };
};

export const LoadGoogleCalendarEvents = (startDate, endDate) => {
    return (dispatch) => {
        
        fetch(`/api/google/calendar/${startDate}/${endDate}`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            dispatch({
                type: actionTypes.ADD_EVENTS,
                events: json.map(item => ({
                    title: item.title,
                    start: new Date(item.start), 
                    end: new Date(item.end)
                }))
            });
        });
    };
};

export const LoadFacebookEvents = (startDate, endDate) => {
    return (dispatch) => {

    };
};
 