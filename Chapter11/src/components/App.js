/**
 * Created by nayunhwan on 2016. 12. 23..
 */

import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from "../containers/VisibleTodoList"

const App = () => {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer />
        </div>
    );
};



// class App extends React.Component {
//
//     render() {
//
//         <div>
//             <AddTodo/>
//             <VisibleTodoList/>
//             <Footer />
//         </div>
//     }
// }

export default App