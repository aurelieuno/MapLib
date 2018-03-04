'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserSupportWarning = function (_Component) {
  _inherits(BrowserSupportWarning, _Component);

  function BrowserSupportWarning() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BrowserSupportWarning);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BrowserSupportWarning.__proto__ || Object.getPrototypeOf(BrowserSupportWarning)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isSupported: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BrowserSupportWarning, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var minVersions = this.props.minVersions;

      var userAgent = this.props.userAgent || typeof window !== 'undefined' && window.navigator.userAgent || null;
      var isSupported = userAgent ? _bowser2.default.check(this.props.minVersions, this.userAgent) : true;
      this.setState({ isSupported: isSupported });
    }
  }, {
    key: 'render',
    value: function render() {
      var isSupported = this.state.isSupported;

      if (isSupported === null || isSupported) {
        return null;
      }
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      var divClassName = (0, _classnames2.default)(className, 'rev-BrowserSupportWarning');
      return _react2.default.createElement(
        'div',
        { className: divClassName },
        children
      );
    }
  }]);

  return BrowserSupportWarning;
}(_react.Component);

exports.default = BrowserSupportWarning;
//# sourceMappingURL=BrowserSupportWarning.js.map