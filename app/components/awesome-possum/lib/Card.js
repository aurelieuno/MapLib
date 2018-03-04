'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardLayout = require('./CardLayout');

var _CardLayout2 = _interopRequireDefault(_CardLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      return _react2.default.createElement(
        _CardLayout2.default,
        _extends({}, props, { className: 'rev-Card ' + className }),
        children
      );
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

var CardHeader = function (_Component2) {
  _inherits(CardHeader, _Component2);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['className', 'children']);

      return _react2.default.createElement(
        _CardLayout2.default.Bar,
        { className: 'rev-Card-header ' + className },
        children
      );
    }
  }]);

  return CardHeader;
}(_react.Component);

Card.Header = CardHeader;

var CardFooter = function (_Component3) {
  _inherits(CardFooter, _Component3);

  function CardFooter() {
    _classCallCheck(this, CardFooter);

    return _possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
  }

  _createClass(CardFooter, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          children = _props3.children,
          props = _objectWithoutProperties(_props3, ['className', 'children']);

      return _react2.default.createElement(
        _CardLayout2.default.Bar,
        { className: 'rev-Card-footer ' + className },
        children
      );
    }
  }]);

  return CardFooter;
}(_react.Component);

Card.Footer = CardFooter;

var CardBody = function (_Component4) {
  _inherits(CardBody, _Component4);

  function CardBody() {
    _classCallCheck(this, CardBody);

    return _possibleConstructorReturn(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
  }

  _createClass(CardBody, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          className = _props4.className,
          children = _props4.children,
          props = _objectWithoutProperties(_props4, ['className', 'children']);

      return _react2.default.createElement(
        _CardLayout2.default.Bar,
        { className: 'rev-Card-body ' + className },
        children
      );
    }
  }]);

  return CardBody;
}(_react.Component);

Card.Body = CardBody;
//# sourceMappingURL=Card.js.map