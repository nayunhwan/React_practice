// sample01.js
var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello, World!</h1>
    );
  }
});


ReactDOM.render(
  <HelloWorld date={new Date()} />,
  document.getElementById('example')
);
