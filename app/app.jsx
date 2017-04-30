var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory}= require('react-router');

var Main = require('Main');
var AllNews = require('AllNews');
var TechNews = require('TechNews');
var WorldNews = require('WorldNews');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={AllNews}/>
      <Route path="tech" component={TechNews}/>
      <Route path="world" component={WorldNews}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
