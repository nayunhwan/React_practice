import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// This is Action

const INCRSEMENT = 'INCRESEMENT';

function increase(num){
    return{
        type: INCRSEMENT,
        addNum: num
    }
}

// This is Reducer

const initialState = {
    value: 0
};


const reducer = (state = initialState, action) => {
    switch (action.type){
        case INCRSEMENT:
            return Object.assign({}, state, {
                value: state.value+action.addNum
            });
        default:
            return state;
    }
}

// This is Store
const store = createStore(reducer);



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
        this.onClick = this.onClick.bind(this);
        props.store.subscribe(() => this.setState({
            value: props.store.getState().value,
        }));
    }

    onClick(){
        console.log('click');
        this.props.store.dispatch(increase(1));
        console.log(this.props.store.getState().value);
    }
    render(){
        return(
            <div onClick={this.onClick}>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}




ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);


