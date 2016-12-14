// It is Chapter03 Example, It will help you to make React Component

class Element extends React.Component{

  sayhey(){
    alert('Hello!');
  }

  render(){

    return(
      <div>
        <h1> Hello! {name}, Welcome to React</h1>
        <button onClick={this.sayhey}>click me</button>
      </div>
    )
  }
}

ReactDOM.render(<Element/>, document.getElementById("root"));
