/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Component} from 'react';

const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}
