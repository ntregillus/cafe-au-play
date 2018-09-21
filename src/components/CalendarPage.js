import react from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Calendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const minTime = new Date(moment().startOf('day').add(9, 'hours'));
const maxTime = new Date(moment().startOf('day').add(22, 'hours'));
const CalendarPage = (props) => (
    <div>
        <h1 className="center-title">Event Calendar</h1>
        <div className="calendar-container">
            <Calendar
                events={props.events}
                defaultDate={new Date()}
                defaultView="month"
                min={minTime}
                max={maxTime}
                styles={{height: '25vh'}}
            > 
            </Calendar>
        </div>
    </div>
);

const setStateToProp = (state) => {
    return {
        events: state.events
    };
}

export default connect(setStateToProp)(CalendarPage);