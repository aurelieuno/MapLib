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

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          error = _props.error,
          props = _objectWithoutProperties(_props, ['className', 'error']);

      var inputClassName = (0, _classnames2.default)(className, 'rev-Textarea', {
        'is-invalid-input': !!error,
        'is-invalid': !!error
      });
      return _react2.default.createElement('textarea', _extends({ className: inputClassName }, props));
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.defaultProps = {
  type: 'text'
};
exports.default = Textarea;

var TextareaStack = function (_Component2) {
  _inherits(TextareaStack, _Component2);

  function TextareaStack() {
    _classCallCheck(this, TextareaStack);

    return _possibleConstructorReturn(this, (TextareaStack.__proto__ || Object.getPrototypeOf(TextareaStack)).apply(this, arguments));
  }

  _createClass(TextareaStack, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          error = _props2.error,
          help = _props2.help,
          className = _props2.className,
          label = _props2.label,
          props = _objectWithoutProperties(_props2, ['error', 'help', 'className', 'label']);

      var labelClassName = (0, _classnames2.default)(className, 'rev-TextareaStack');

      return _react2.default.createElement(
        _InputLabel2.default,
        { className: labelClassName, error: error },
        label,
        _react2.default.createElement(Textarea, _extends({}, props, { error: error })),
        _react2.default.createElement(
          _InputHelpText2.default,
          null,
          help
        ),
        _react2.default.createElement(
          _InputErrors2.default,
          null,
          error
        )
      );
    }
  }]);

  return TextareaStack;
}(_react.Component);

Textarea.Stack = TextareaStack;
//# sourceMappingURL=Textarea.js.map