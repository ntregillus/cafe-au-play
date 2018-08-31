//import './utils.js' ;
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

//styling (webpack will extract, convert to css, minify into a single file)
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//internal modules
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';


console.log('App.js is running.');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));