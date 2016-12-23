/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App'

let store = createStore(todoApp);
const root = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , root
)
