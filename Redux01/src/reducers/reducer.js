/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import { ADD_TODO } from '../actions/action';

const initialState = [{
    text: '할 일 목록 #1',
    completed: false,
    id: 1
}];

export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_TODO:
            // 데이터를 추가하기
            return [
                {
                    completed: false,
                    text: action.text
                },
                ...state
            ];
        default:
            return state;
    }
}
