/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React, {Component, PropTypes} from 'react';
import Todo from './Todo'
import store from '../store/store'

export default class TodoList extends Component{
    constructor(props){
        super(props);
        console.log("TodoList");
        console.log(props);

    }


    render(){
        const { todos, actions } = this.props;

        console.log(todos)




        // let rows = store.getState()
        // console.log(rows.toString());



        return(
            <ul>
                {
                    todos.map((todo, i) => {
                        return <Todo
                            key={i}
                            text={todo.text}
                        />
                    })
                }
            </ul>
        )
    }
}

// TodoList.propTypes = {
//     // String을 Element로 갖고 있는 Array
//     todos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
// }