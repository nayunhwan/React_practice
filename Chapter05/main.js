// This is Chapter05 Example, It explains that how to handle event.

class Element extends React.Component{
  constructor(props) {
    super(props);

    // Only React
    this.state = {
        value: ''
    };

    // bind를 하지 않으면 메소드에서 this가 뭔지 모른다.
    this.handleChange = this.handleChange.bind(this);
    console.log(props)
  }

  handleChange(event){
      // console.log(event);
      // console.log(event.target.value);
      this.setState({value : event.target.value})
  }

  keyDown(event) {
      console.log(event.key);
  }

  render(){
    return(
      <div>
        <input type="text"  value={this.state.value} onChange={this.handleChange} onKeyDown={this.keyDown}/>
        {/*<input type="text" value={this.state.value}/>*/}
        <h1>{this.state.value}</h1>
        <h1>오직</h1>
        <Sub
            input={this.state.value}
        />
      </div>
    )
  }
}


ReactDOM.render(<Element/>, document.getElementById("root"));
