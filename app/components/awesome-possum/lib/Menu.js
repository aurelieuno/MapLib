'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

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
  horizontal: ['rev-Menu--horizontalLeft'],
  horizontalLeft: ['rev-Menu--horizontalLeft'],
  horizontalCentered: ['rev-Menu--horizontalCentered'],
  horizontalJustified: ['rev-Menu--horizontalJustified'],
  horizontalRight: ['rev-Menu--horizontalRight'],

  vertical: ['rev-Menu--verticalLeft'],
  verticalLeft: ['rev-Menu--verticalLeft'],
  verticalCentered: ['rev-Menu--verticalCentered'],
  verticalRight: ['rev-Menu--verticalRight'],

  nested: ['rev-Menu--nested'],
  dividers: ['rev-Menu--dividers'],
  inverse: ['rev-Menu--inverse'],
  icons: ['rev-Menu--icons']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'className']);

      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });
      var newClassName = (0, _classnames2.default)(className, 'rev-Menu', boolClassNames);

      return _react2.default.createElement(
        'ul',
        _extends({}, props, { className: newClassName }),
        children
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;

var MenuItem = exports.MenuItem = function (_Component2) {
  _inherits(MenuItem, _Component2);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          text = _props2.text,
          divider = _props2.divider,
          active = _props2.active,
          props = _objectWithoutProperties(_props2, ['children', 'className', 'text', 'divider', 'active']);

      var newClassName = (0, _classnames2.default)('rev-Menu-item ' + (className || ''), {
        'rev-Menu-item--divider': divider,
        'rev-Menu-item--text': text,
        'rev-Menu-item--selected': active
      });

      return _react2.default.createElement(
        'li',
        _extends({}, props, { className: newClassName }),
        children
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

Menu.Item = MenuItem;
//# sourceMappingURL=Menu.js.map