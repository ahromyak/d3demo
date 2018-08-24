import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {HashRouter} from 'react-router-dom';

import App from "../src/containers/App";

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <HashRouter>
                <App/>
            </HashRouter>
        </BrowserRouter>
    </Provider>
), document.getElementById('index'));