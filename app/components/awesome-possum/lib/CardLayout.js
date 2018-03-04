'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLayoutFill = exports.CardLayoutBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  small: ['rev-Card--small'],
  large: ['rev-Card--large'],
  primary: ['rev-Card--primary'],
  secondary: ['rev-Card--secondary']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var CardLayout = function (_Component) {
  _inherits(CardLayout, _Component);

  function CardLayout() {
    _classCallCheck(this, CardLayout);

    return _possibleConstructorReturn(this, (CardLayout.__proto__ || Object.getPrototypeOf(CardLayout)).apply(this, arguments));
  }

  _createClass(CardLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      // Start building the className


      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var divClassName = (0, _classnames2.default)(className, 'rev-CardLayout', boolClassNames);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return CardLayout;
}(_react.Component);

exports.default = CardLayout;

var CardLayoutBar = exports.CardLayoutBar = function (_Component2) {
  _inherits(CardLayoutBar, _Component2);

  function CardLayoutBar() {
    _classCallCheck(this, CardLayoutBar);

    return _possibleConstructorReturn(this, (CardLayoutBar.__proto__ || Object.getPrototypeOf(CardLayoutBar)).apply(this, arguments));
  }

  _createClass(CardLayoutBar, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['className', 'children']);

      var divClassName = (0, _classnames2.default)(className, 'rev-CardLayout-bar');
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return CardLayoutBar;
}(_react.Component);

CardLayout.Bar = CardLayoutBar;

var CardLayoutFill = exports.CardLayoutFill = function (_Component3) {
  _inherits(CardLayoutFill, _Component3);

  function CardLayoutFill() {
    _classCallCheck(this, CardLayoutFill);

    return _possibleConstructorReturn(this, (CardLayoutFill.__proto__ || Object.getPrototypeOf(CardLayoutFill)).apply(this, arguments));
  }

  _createClass(CardLayoutFill, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          children = _props3.children,
          props = _objectWithoutProperties(_props3, ['className', 'children']);

      var divClassName = (0, _classnames2.default)(className, 'rev-CardLayout-fill');
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return CardLayoutFill;
}(_react.Component);

CardLayout.Fill = CardLayoutFill;
//# sourceMappingURL=CardLayout.js.map