'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatelessModal = function (_Component) {
  _inherits(StatelessModal, _Component);

  function StatelessModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatelessModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatelessModal.__proto__ || Object.getPrototypeOf(StatelessModal)).call.apply(_ref, [this].concat(args))), _this), _this.onBackgroundClick = function (e) {
      if (_this.props.onBackgroundClick) {
        _this.props.onBackgroundClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatelessModal, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)(this.props.className, {
        'rev-Modal': true
      });

      if (this.props.isOpen) {
        console.log(this.props);
        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement('div', { className: 'rev-Modal-background', onClick: this.onBackgroundClick }),
          _react2.default.createElement(
            'div',
            { className: 'rev-Modal-content'},
            this.props.children,

          )
        );
      }

      return null;
    }
  }]);

  return StatelessModal;
}(_react.Component);

StatelessModal.propTypes = {
  isOpen: _propTypes2.default.bool,
  onBackgroundClick: _propTypes2.default.func
};
StatelessModal.defaultProps = {
  isOpen: false
};
exports.default = StatelessModal;
//# sourceMappingURL=StatelessModal.js.map