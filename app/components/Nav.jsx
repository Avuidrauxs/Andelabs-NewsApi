var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function (){
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>All News</IndexLink>
        <Link to="tech" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Tech News</Link>
        <Link to="world" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>World News</Link>
      </div>

    );
  }
});

module.exports = Nav;
