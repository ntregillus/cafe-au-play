import React from 'react';

const Widget = (props) => (
    <div className="widget">
        <div className="widget__header">
            {props.header}
        </div>
        <div className="widget__body">
            {props.children}
        </div>
        { props.footer &&
        <div className="widget__footer">
            {props.footer}
        </div>
        }
    </div>
    );

export default Widget;