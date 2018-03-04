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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_NAMES = {
  left: 'Text-left',
  right: 'Text-right',
  center: 'Text-center',
  justify: 'Text-justify',

  smallLeft: 'Text--smallLeft',
  smallRight: 'Text--smallRight',
  smallCenter: 'Text--smallCenter',
  smallJustify: 'Text--smallJustify',

  mediumLeft: 'Text--mediumLeft',
  mediumRight: 'Text--mediumRight',
  mediumCenter: 'Text--mediumCenter',
  mediumJustify: 'Text--mediumJustify',

  largeLeft: 'Text--largeLeft',
  largeRight: 'Text--largeRight',
  largeCenter: 'Text--largeCenter',
  largeJustify: 'Text--largeJustify',

  xlargeLeft: 'Text--xlargeLeft',
  xlargeRight: 'Text--xlargeRight',
  xlargeCenter: 'Text--xlargeCenter',
  xlargeJustify: 'Text--xlargeJustify',

  xxlargeLeft: 'Text--xxlargeLeft',
  xxlargeRight: 'Text--xxlargeRight',
  xxlargeCenter: 'Text--xxlargeCenter',
  xxlargeJustify: 'Text--xxlargeJustify'
};

var PROP_TYPES = {
  children: _propTypes2.default.element
};
Object.keys(CLASS_NAMES).forEach(function (key) {
  return PROP_TYPES[key] = _propTypes2.default.bool;
});

var TextAlign = function (_Component) {
  _inherits(TextAlign, _Component);

  function TextAlign() {
    _classCallCheck(this, TextAlign);

    return _possibleConstructorReturn(this, (TextAlign.__proto__ || Object.getPrototypeOf(TextAlign)).apply(this, arguments));
  }

  _createClass(TextAlign, [{
    key: 'render',
    value: function render() {
      var classNamesList = [this.props.children.className];
      Object.keys(this.props).forEach(function (propName) {
        var className = CLASS_NAMES[propName];
        if (className) {
          classNamesList.push(className);
        }
      });
      return (0, _react.cloneElement)(this.props.children, { className: (0, _classnames2.default)(classNamesList) });
    }
  }]);

  return TextAlign;
}(_react.Component);

TextAlign.propTypes = {
  children: _propTypes2.default.element
};
exports.default = TextAlign;
//# sourceMappingURL=TextAlign.js.map