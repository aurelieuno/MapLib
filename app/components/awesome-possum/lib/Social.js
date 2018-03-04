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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URL_FUNCTIONS = {
  BUFFER: function BUFFER(url, text) {
    return 'https://buffer.com/add?text=' + text + '&url=' + url;
  },
  DIGG: function DIGG(url, text) {
    return 'http://digg.com/submit?url=' + url + '&title=' + text;
  },
  EMAIL: function EMAIL(url, text) {
    return 'mailto:?subject=' + text + '&body=' + url;
  },
  FACEBOOK: function FACEBOOK(url) {
    return 'https://www.facebook.com/sharer/sharer.php?u=' + url;
  },
  GOOGLE_PLUS: function GOOGLE_PLUS(url) {
    return 'https://plus.google.com/share?url=' + url;
  },
  LINKEDIN: function LINKEDIN(url, text) {
    return 'https://www.linkedin.com/shareArticle?url=' + url + '&title=' + text;
  },
  PINTEREST: function PINTEREST(url, text) {
    return 'https://pinterest.com/pin/create/bookmarklet/?url=' + url + '&description=' + text;
  },
  REDDIT: function REDDIT(url, text) {
    return 'https://reddit.com/submit?url=' + url + '&title=' + text;
  },
  TUMBLR: function TUMBLR(url, text) {
    return 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + url + '&caption=' + text;
  },
  TWITTER: function TWITTER(url, text) {
    return 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text;
  }
};

var Social = function (_Component) {
  _inherits(Social, _Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
  }

  _createClass(Social, [{
    key: 'render',
    value: function render() {
      // Extract props that will not pass through.
      var _props = this.props,
          className = _props.className,
          componentClass = _props.componentClass,
          url = _props.url,
          message = _props.message,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'componentClass', 'url', 'message', 'children']);

      var componentClassName = (0, _classnames2.default)(className, "social");

      var componentProps = _extends({}, props, {
        href: this.href,
        rel: "noopener noreferrer",
        target: "_blank",
        className: componentClassName
      });

      return (0, _react.createElement)(componentClass || 'a', componentProps, children);
    }
  }, {
    key: 'href',
    get: function get() {
      var _props2 = this.props,
          type = _props2.type,
          url = _props2.url,
          message = _props2.message;

      return type(encodeURIComponent(url), encodeURIComponent(message));
    }
  }]);

  return Social;
}(_react.Component);

Social.types = URL_FUNCTIONS;
Social.propTypes = {
  type: _propTypes2.default.func.isRequired,
  url: _propTypes2.default.string.isRequired,
  message: _propTypes2.default.string
};
Social.defaultProps = {
  message: "Check this out!",
  componentClass: 'a'
};
exports.default = Social;
//# sourceMappingURL=Social.js.map