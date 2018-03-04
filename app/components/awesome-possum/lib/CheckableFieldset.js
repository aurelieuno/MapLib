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

var CheckableFieldset = function (_Component) {
  _inherits(CheckableFieldset, _Component);

  function CheckableFieldset() {
    _classCallCheck(this, CheckableFieldset);

    return _possibleConstructorReturn(this, (CheckableFieldset.__proto__ || Object.getPrototypeOf(CheckableFieldset)).apply(this, arguments));
  }

  _createClass(CheckableFieldset, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          className = _props.className,
          children = _props.children,
          help = _props.help,
          error = _props.error,
          name = _props.name,
          value = _props.value,
          defaultValue = _props.defaultValue,
          options = _props.options,
          props = _objectWithoutProperties(_props, ['label', 'className', 'children', 'help', 'error', 'name', 'value', 'defaultValue', 'options']);

      var fieldsetClassName = (0, _classnames2.default)(className, 'fieldset', 'rev-CheckableFieldset', { 'is-invalid-fieldset': !!error });

      var legendClassName = (0, _classnames2.default)({
        'is-invalid-label': !!error
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'fieldset',
          _extends({}, props, { className: fieldsetClassName }),
          label ? _react2.default.createElement(
            'legend',
            { className: legendClassName },
            label
          ) : null,
          children,
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
        )
      );
    }
  }]);

  return CheckableFieldset;
}(_react.Component);

exports.default = CheckableFieldset;
//# sourceMappingURL=CheckableFieldset.js.map