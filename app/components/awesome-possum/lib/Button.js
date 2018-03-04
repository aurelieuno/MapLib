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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  small: ['rev-Button--small'],
  large: ['rev-Button--large'],

  primary: ['rev-Button--primary'],
  secondary: ['rev-Button--secondary'],
  inverted: ['rev-Button--inverted'],

  success: ['rev-Button--success'],
  warning: ['rev-Button--warning'],
  alert: ['rev-Button--alert'],
  disabled: ['rev-Button--disabled'],

  expanded: ['rev-Button--expanded'],

  dropdown: ['rev-Button--dropdown']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      // Extract props that will not pass through.
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          tag = _props.tag,
          icon = _props.icon,
          props = _objectWithoutProperties(_props, ['className', 'children', 'tag', 'icon']);

      // Start building the className


      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      // Of the props that WILL pass through, we need to use these.
      var disabled = props.disabled,
          href = props.href;

      // Finish building the classNAme

      var buttonClassName = (0, _classnames2.default)(className, 'rev-Button', boolClassNames, {
        disabled: disabled
      });

      // Modify underlying tag to suit props.
      var component = tag || (href ? 'a' : 'button');

      // Prepend icon if available
      var newChildren = children;
      if (icon) {
        newChildren = [_react2.default.createElement(_Icon2.default, { className: 'rev-Button-icon', key: 'icon', i: icon }), ' '].concat(_toConsumableArray(_react.Children.toArray(children)));
      }

      // Finish
      return (0, _react.createElement)(component, _extends({}, props, { className: buttonClassName }), newChildren);
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;
//# sourceMappingURL=Button.js.map