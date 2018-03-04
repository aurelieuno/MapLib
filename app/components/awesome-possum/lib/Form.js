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

var _AuthenticityToken = require('./AuthenticityToken');

var _AuthenticityToken2 = _interopRequireDefault(_AuthenticityToken);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          enableMethodOverride = _props.enableMethodOverride,
          methodOverrideInputName = _props.methodOverrideInputName,
          method = _props.method,
          props = _objectWithoutProperties(_props, ['className', 'children', 'enableMethodOverride', 'methodOverrideInputName', 'method']);

      var formClassName = (0, _classnames2.default)(className, 'rev-Form');

      var overrideMethod = //only override the method name if its enabled and the method is not post or get.
      enableMethodOverride && !['get', 'post'].includes(method.toLowerCase());

      var actualMethod = overrideMethod ? "post" : method;

      return _react2.default.createElement(
        'form',
        _extends({}, props, { className: formClassName, method: actualMethod }),
        _react2.default.createElement(_AuthenticityToken2.default, null),
        overrideMethod && _react2.default.createElement('input', { type: 'hidden', name: methodOverrideInputName, value: method }),
        children
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  enableMethodOverride: _propTypes2.default.bool,
  methodOverrideInputName: _propTypes2.default.string,
  method: _propTypes2.default.string
};
Form.defaultProps = {
  className: '',
  enableMethodOverride: true,
  methodOverrideInputName: '_method',
  method: 'post'
};
exports.default = Form;
//# sourceMappingURL=Form.js.map