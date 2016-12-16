// This is Chapter04 Example, It explains that how to handle event.

class Element extends React.Component{
  constructor(props) {
    super(props);

    this.state = {value: 'jnjkn'};
    this.handleChange = this.handleChange.bind(this);
    console.log(props)
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // var handleChange = (event) => ({value: event.target.value})

  handleChange(event){
    // alert('hello');
    console.log(event.target.value);
    this.setState({value : event.target.value})
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="text" value={this.state.value}/>
        <h1>{this.state.value}</h1>
        <h1>오직</h1>

      </div>
    )
  }
}

ReactDOM.render(<Element/>, document.getElementById("root"));
