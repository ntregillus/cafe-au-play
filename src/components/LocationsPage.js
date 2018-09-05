import React from 'react';
import Map from './Map';
import Widget from './Widget';
const LocationsPage = () => (
    <div>
        <div className="container">
            <p>Cafe au play meets in the following locations</p>
            <Widget header="Headquarters">
                test this content
            </Widget>

        </div>
        <Map>
            
        </Map>
    </div>
);

export default LocationsPage;