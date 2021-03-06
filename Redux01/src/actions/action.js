/**
 * Created by nayunhwan on 2016. 12. 23..
 */

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function addTodo(text){
    return {type: ADD_TODO, text}
}

export function deleteTodo(id){
    return {type: DELETE_TODO, id}
}