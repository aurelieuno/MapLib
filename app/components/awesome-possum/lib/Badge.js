'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROP_NAME_TO_CLASS_NAME = {
  primary: ['rev-Badge--primary'],
  secondary: ['rev-Badge--secondary'],
  tertiary: ['rev-Badge--tertiary'],
  accent: ['rev-Badge--accent'],
  alert: ['rev-Badge--alert'],
  warning: ['rev-Badge--warning'],
  success: ['rev-Badge--success']
};
var PROP_NAMES = Object.keys(PROP_NAME_TO_CLASS_NAME);
var PROP_TYPES = {
  icon: _propTypes2.default.string
};

PROP_NAMES.forEach(function (key) {
  return PROP_TYPES[key] = _propTypes2.default.bool;
});

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          props = _objectWithoutProperties(_props, ['className', 'children', 'icon']);

      var propClassNames = [];
      PROP_NAMES.forEach(function (name) {
        if (props[name]) {
          propClassNames.push(PROP_NAME_TO_CLASS_NAME[name]);
          delete props[name];
        }
      });

      var newClassName = (0, _classnames2.default)(className, 'rev-Badge', propClassNames);

      return _react2.default.createElement(
        'span',
        _extends({}, props, { className: newClassName }),
        icon ? _react2.default.createElement(_Icon2.default, { i: icon, className: 'rev-Badge-icon' }) : null,
        ' ',
        children
      );
    }
  }]);

  return Badge;
}(_react.Component);

Badge.propTypes = PROP_TYPES;
exports.default = Badge;
//# sourceMappingURL=Badge.js.map