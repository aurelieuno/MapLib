var React = require("react");
var ReactDOM = require("react-dom");
var PropTypes = require("prop-types")
require("./index.css");
// require("./components/awesome-possum/scss/app.scss");

var App = require("./components/App")

ReactDOM.render(
  <App/>,
  document.getElementById("app")
  )