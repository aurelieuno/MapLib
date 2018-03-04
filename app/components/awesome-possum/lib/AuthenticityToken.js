'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticityToken = function (_Component) {
  _inherits(AuthenticityToken, _Component);

  function AuthenticityToken() {
    _classCallCheck(this, AuthenticityToken);

    return _possibleConstructorReturn(this, (AuthenticityToken.__proto__ || Object.getPrototypeOf(AuthenticityToken)).apply(this, arguments));
  }

  _createClass(AuthenticityToken, [{
    key: 'render',
    value: function render() {
      var _context = this.context,
          authenticityTokenName = _context.authenticityTokenName,
          authenticityTokenValue = _context.authenticityTokenValue;

      // If a name has not been provided, just don't render.

      if (!authenticityTokenName) {
        return null;
      }

      return _react2.default.createElement('input', {
        type: 'hidden',
        name: authenticityTokenName,
        value: authenticityTokenValue
      });
    }
  }]);

  return AuthenticityToken;
}(_react.Component);

AuthenticityToken.contextTypes = {
  'authenticityTokenValue': _propTypes2.default.string,
  'authenticityTokenName': _propTypes2.default.string
};
exports.default = AuthenticityToken;
//# sourceMappingURL=AuthenticityToken.js.map