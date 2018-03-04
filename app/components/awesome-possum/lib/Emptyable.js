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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emptyable = function (_React$Component) {
  _inherits(Emptyable, _React$Component);

  function Emptyable() {
    _classCallCheck(this, Emptyable);

    return _possibleConstructorReturn(this, (Emptyable.__proto__ || Object.getPrototypeOf(Emptyable)).apply(this, arguments));
  }

  _createClass(Emptyable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          componentClass = _props.componentClass,
          emptyState = _props.emptyState,
          props = _objectWithoutProperties(_props, ['children', 'componentClass', 'emptyState']);

      if (children) {
        return _react2.default.createElement(componentClass, _extends({}, props), children);
      }
      return emptyState;
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        componentClass: _propTypes2.default.node,
        emptyState: _propTypes2.default.element.isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        componentClass: 'div'
      };
    }
  }]);

  return Emptyable;
}(_react2.default.Component);

exports.default = Emptyable;
//# sourceMappingURL=Emptyable.js.map