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

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInput = function (_Component) {
  _inherits(FileInput, _Component);

  function FileInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FileInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filePath: null
    }, _this.onChange = function (e) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      var filePath = e.currentTarget.value.substring('C:\\fakepath\\'.length);

      _this.setState({ filePath: filePath });

      if (_this.props.onChange) {
        var _this$props;

        return (_this$props = _this.props).onChange.apply(_this$props, [e].concat(rest));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FileInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          button = _props.button,
          className = _props.className,
          error = _props.error,
          placeholder = _props.placeholder,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['button', 'className', 'error', 'placeholder', 'onChange']);

      var filePath = this.state.filePath;


      var inputGroupClassName = (0, _classnames2.default)(className, 'rev-FileInput', {
        'is-invalid': !!error
      });

      return _react2.default.createElement(
        _InputGroup2.default,
        { className: inputGroupClassName },
        _react2.default.createElement(
          _InputGroup2.default.Field,
          null,
          _react2.default.createElement(
            _InputGroup2.default.Label,
            { className: 'rev-FileInput-label' },
            filePath || placeholder
          )
        ),
        _react2.default.createElement(
          _InputGroup2.default.Button,
          null,
          _react2.default.createElement(
            _Button2.default,
            { tag: 'label', className: 'rev-FileInput-button' },
            button,
            _react2.default.createElement('input', _extends({}, props, { type: 'file', className: 'ShowForSR', onChange: this.onChange }))
          )
        )
      );
    }
  }]);

  return FileInput;
}(_react.Component);

FileInput.defaultProps = {
  button: 'Choose File',
  placeholder: 'No file chosen'
};
exports.default = FileInput;

var FileInputStack = function (_Component2) {
  _inherits(FileInputStack, _Component2);

  function FileInputStack() {
    _classCallCheck(this, FileInputStack);

    return _possibleConstructorReturn(this, (FileInputStack.__proto__ || Object.getPrototypeOf(FileInputStack)).apply(this, arguments));
  }

  _createClass(FileInputStack, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          error = _props2.error,
          help = _props2.help,
          className = _props2.className,
          label = _props2.label,
          props = _objectWithoutProperties(_props2, ['error', 'help', 'className', 'label']);

      var labelClassName = (0, _classnames2.default)(className, 'rev-FileInputStack');

      return _react2.default.createElement(
        _InputLabel2.default,
        { className: labelClassName, error: error },
        label,
        _react2.default.createElement(FileInput, _extends({}, props, { error: error })),
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

  return FileInputStack;
}(_react.Component);

FileInput.Stack = FileInputStack;
//# sourceMappingURL=FileInput.js.map