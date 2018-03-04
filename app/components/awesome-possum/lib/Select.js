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

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          options = _props.options,
          className = _props.className,
          error = _props.error,
          props = _objectWithoutProperties(_props, ['children', 'options', 'className', 'error']);

      var inputClassName = (0, _classnames2.default)(className, 'rev-Select', {
        'is-invalid-input': !!error,
        'is-invalid': !!error
      });

      return _react2.default.createElement(
        'select',
        _extends({ className: inputClassName }, props),
        children,
        options ? Select.options(options) : null
      );
    }
  }], [{
    key: 'options',
    value: function options(_options) {
      return _options.map(function (_ref) {
        var key = _ref.key,
            label = _ref.label,
            value = _ref.value,
            props = _objectWithoutProperties(_ref, ['key', 'label', 'value']);

        return _react2.default.createElement(
          'option',
          _extends({ key: key || value, value: value }, props),
          label
        );
      });
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;

var SelectStack = function (_Component2) {
  _inherits(SelectStack, _Component2);

  function SelectStack() {
    _classCallCheck(this, SelectStack);

    return _possibleConstructorReturn(this, (SelectStack.__proto__ || Object.getPrototypeOf(SelectStack)).apply(this, arguments));
  }

  _createClass(SelectStack, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          label = _props2.label,
          className = _props2.className,
          help = _props2.help,
          error = _props2.error,
          props = _objectWithoutProperties(_props2, ['children', 'label', 'className', 'help', 'error']);

      var labelClassName = (0, _classnames2.default)(className, 'rev-SelectStack');

      return _react2.default.createElement(
        _InputLabel2.default,
        { className: labelClassName, error: error },
        label,
        _react2.default.createElement(
          Select,
          _extends({}, props, { error: error }),
          children
        ),
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

  return SelectStack;
}(_react.Component);

Select.Stack = SelectStack;
//# sourceMappingURL=Select.js.map