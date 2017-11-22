var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('Main')


// Load Foundation The ! are done before you call in your loaders
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  	</Route>
  </Router>,
  document.getElementById('app')
);

// history only propery that Router takes