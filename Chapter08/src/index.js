import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todoApp from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
    // React 0.13의 이슈를 회피하기 위해
    // 반드시 함수로 감싸줍니다.
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    rootElement
);
