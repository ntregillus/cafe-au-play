import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 

//components
import Header from '../components/Header';
import Menu from '../components/Menu';
import HomePage from '../components/HomePage';
import LocationsPage from '../components/LocationsPage';
import ServicesPage from '../components/ServicesPage';
import ReservationsPage from '../components/ReservationsPage';
import MembershipsPage from '../components/MembershipsPage';
import CalendarPage from '../components/CalendarPage';
import NotFoundPage from '../components/NotFoundPage';
import {StickyContainer, Sticky} from 'react-sticky';
export const history = createHistory(); 
const AppRouter = () => (
    <Router history={history}>
        <StickyContainer> 
            <Header />
            <Menu />
            <Switch>
                <Route path='/' exact={true} component={HomePage} />
                <Route path='/locations' component={LocationsPage} />
                <Route path='/services' component={ServicesPage} />
                <Route path='/reservations' component={ReservationsPage} />
                <Route path='/memberships' component={MembershipsPage} />
                <Route path='/calendar' component={CalendarPage} />
                {/*backwards compatibility routes!*/}
                <Route path='/reserve-space-online' component={ReservationsPage} />
                {/*404, undefined routes!*/}
                <Route component={NotFoundPage} />
            </Switch>
        </StickyContainer>
    </Router>
);

export default AppRouter;