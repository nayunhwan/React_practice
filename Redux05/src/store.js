/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';
import reducer from './reducers/reducer'
import {createStore} from 'redux';

export default createStore(reducer);

