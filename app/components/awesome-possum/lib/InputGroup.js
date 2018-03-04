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

var InputGroup = function (_Component) {
  _inherits(InputGroup, _Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: (0, _classnames2.default)(className, 'input-group', 'rev-InputGroup') }),
        children
      );
    }
  }]);

  return InputGroup;
}(_react.Component);

exports.default = InputGroup;

var InputGroupLabel = function (_Component2) {
  _inherits(InputGroupLabel, _Component2);

  function InputGroupLabel() {
    _classCallCheck(this, InputGroupLabel);

    return _possibleConstructorReturn(this, (InputGroupLabel.__proto__ || Object.getPrototypeOf(InputGroupLabel)).apply(this, arguments));
  }

  _createClass(InputGroupLabel, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['className', 'children']);

      return _react2.default.createElement(
        'span',
        _extends({}, props, { className: (0, _classnames2.default)(className, 'rev-InputGroup-label') }),
        children
      );
    }
  }]);

  return InputGroupLabel;
}(_react.Component);

var InputGroupButton = function (_Component3) {
  _inherits(InputGroupButton, _Component3);

  function InputGroupButton() {
    _classCallCheck(this, InputGroupButton);

    return _possibleConstructorReturn(this, (InputGroupButton.__proto__ || Object.getPrototypeOf(InputGroupButton)).apply(this, arguments));
  }

  _createClass(InputGroupButton, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          children = _props3.children,
          props = _objectWithoutProperties(_props3, ['className', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: (0, _classnames2.default)(className, 'input-group-button', 'rev-InputGroup-button') }),
        children
      );
    }
  }]);

  return InputGroupButton;
}(_react.Component);

var InputGroupField = function (_Component4) {
  _inherits(InputGroupField, _Component4);

  function InputGroupField() {
    _classCallCheck(this, InputGroupField);

    return _possibleConstructorReturn(this, (InputGroupField.__proto__ || Object.getPrototypeOf(InputGroupField)).apply(this, arguments));
  }

  _createClass(InputGroupField, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          className = _props4.className;

      return (0, _react.cloneElement)(_react.Children.only(children), { className: (0, _classnames2.default)(className, 'rev-InputGroup-field') });
    }
  }]);

  return InputGroupField;
}(_react.Component);

var InputGroupStack = function (_Component5) {
  _inherits(InputGroupStack, _Component5);

  function InputGroupStack() {
    _classCallCheck(this, InputGroupStack);

    return _possibleConstructorReturn(this, (InputGroupStack.__proto__ || Object.getPrototypeOf(InputGroupStack)).apply(this, arguments));
  }

  _createClass(InputGroupStack, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          children = _props5.children,
          error = _props5.error,
          help = _props5.help,
          label = _props5.label,
          props = _objectWithoutProperties(_props5, ['children', 'error', 'help', 'label']);

      return _react2.default.createElement(
        _InputLabel2.default,
        _extends({}, props, { error: error }),
        label,
        _react2.default.createElement(
          InputGroup,
          null,
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

  return InputGroupStack;
}(_react.Component);

InputGroup.Label = InputGroupLabel;
InputGroup.Button = InputGroupButton;
InputGroup.Field = InputGroupField;
InputGroup.Stack = InputGroupStack;
//# sourceMappingURL=InputGroup.js.map