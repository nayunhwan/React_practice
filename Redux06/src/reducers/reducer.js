/**
 * Created by nayunhwan on 2016. 12. 27..
 */

import React, {Component} from 'react';
import {INCREMENT, DECREMENT, SET_DIFF} from '../actions/index';

export const reducer = (state = [], action) => {
    switch (action.type){
        case INCREMENT:
            return Object.assign({}, state, {
                value : state.value + state.diff
            })
        case DECREMENT:
            return Object.assign({}, state, {
                value : state.value - state.diff
            })
        case SET_DIFF:
            return Object.assign({}, state, {
                diff : action.diff
            })
        default:
            return state;
    }
}