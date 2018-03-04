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
  primary: ['rev-Progress--primary'],
  secondary: ['rev-Progress--secondary'],
  tertiary: ['rev-Progress--tertiary'],
  accent: ['rev-Progress--accent'],
  success: ['rev-Progress--success'],
  warning: ['rev-Progress--warning'],
  alert: ['rev-Progress--alert']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          props = _objectWithoutProperties(_props, ['className', 'children', 'min', 'max', 'value']);

      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var divClassName = (0, _classnames2.default)(className, 'progress', 'rev-Progress', boolClassNames);

      var ratio = Math.min(1, (value - min) / (max - min));
      var width = ratio * 100 + '%';

      var text = children ? _react2.default.createElement(
        'div',
        { className: 'rev-Progress-text' },
        children
      ) : null;

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        _react2.default.createElement(
          'div',
          { className: 'rev-Progress-track' },
          _react2.default.createElement('div', { className: 'rev-Progress-track-amount ', style: { width: width } })
        ),
        text
      );
    }
  }]);

  return Progress;
}(_react.Component);

Progress.defaultProps = {
  min: 0,
  max: 100
};
exports.default = Progress;
//# sourceMappingURL=Progress.js.map