// This is Chapter01 Example, It will help you to make React Class

const HelloWorld = React.createClass({
  render(){
    return (
      <h1>Hello, World!</h1>
    );
  }
});


ReactDOM.render(
  <HelloWorld />,
  document.getElementById('example')
);
