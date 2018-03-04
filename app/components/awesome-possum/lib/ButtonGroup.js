'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  small: ['rev-ButtonGroup--small'],
  large: ['rev-ButtonGroup--large'],

  primary: ['rev-ButtonGroup--primary'],
  secondary: ['rev-ButtonGroup--secondary'],
  inverted: ['rev-ButtonGroup--inverted'],

  success: ['rev-ButtonGroup--success'],
  warning: ['rev-ButtonGroup--warning'],
  alert: ['rev-ButtonGroup--alert'],
  disabled: ['rev-Button--disabled'],

  expanded: ['rev-ButtonGroup--expanded'],

  stackedForSmall: ['rev-ButtonGroup--stackedForSmall']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var ButtonGroup = function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var divClassName = (0, _classnames2.default)(className, 'rev-ButtonGroup', boolClassNames);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map