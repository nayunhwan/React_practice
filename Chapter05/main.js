class Element extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h1>{this.state.value}</h1>
        <h1>오직</h1>

      </div>
    )
  }
}

ReactDOM.render(<Element/>, document.getElementById("root"));
