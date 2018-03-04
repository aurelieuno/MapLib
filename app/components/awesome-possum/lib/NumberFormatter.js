'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberFormatter = function (_React$Component) {
  _inherits(NumberFormatter, _React$Component);

  function NumberFormatter() {
    _classCallCheck(this, NumberFormatter);

    return _possibleConstructorReturn(this, (NumberFormatter.__proto__ || Object.getPrototypeOf(NumberFormatter)).apply(this, arguments));
  }

  _createClass(NumberFormatter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.text
      );
    }
  }, {
    key: 'optionProps',
    get: function get() {
      return _underscore2.default.omit(this.props, ['locales', 'value']);
    }
  }, {
    key: 'text',
    get: function get() {
      return this.props.value.toLocaleString(this.props.locales, this.optionProps);
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        value: _propTypes2.default.number.isRequired,
        locales: _propTypes2.default.string,
        localeMatcher: _propTypes2.default.oneOf(['lookup', 'best fit']),
        style: _propTypes2.default.oneOf(['decimal', 'currency', 'percent']),
        currency: _propTypes2.default.string,
        currencyDisplay: _propTypes2.default.oneOf(['symbol', 'code', 'name']),
        useGrouping: _propTypes2.default.bool,
        minimumIntegerDigits: _propTypes2.default.number,
        minimumFractionDigits: _propTypes2.default.number,
        maximumFractionDigits: _propTypes2.default.number,
        minimumSignificantDigits: _propTypes2.default.number,
        maximumSignificantDigits: _propTypes2.default.number
      };
    }
  }]);

  return NumberFormatter;
}(_react2.default.Component);

exports.default = NumberFormatter;
//# sourceMappingURL=NumberFormatter.js.map