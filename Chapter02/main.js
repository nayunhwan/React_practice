// It is Chapter02 Example, It explain about Nested(Container) Element

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello!</h1>
        <h1>World!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
