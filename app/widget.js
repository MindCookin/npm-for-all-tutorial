var React = require('react'),
    reverse = require('reverse-string'),
    Widget;

Widget = React.createClass({
  getInitialState: function() {
    return {message: 'Please fill input above, will be reversed.'};
  },
  handleChange: function (e) {
    var value = e.target.value ? reverse(e.target.value) : 'Please fill input above, will be reversed.';
    this.setState({message: value});
  },
  render: function () {
    return <div><p><input onChange={this.handleChange}/></p><h4>{this.state.message}</h4></div>;
  }
});

React.render(<Widget />, document.getElementById('container'));
