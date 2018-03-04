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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BOOL_PROPS_TO_CLASS_NAMES = _defineProperty({
  collapse: ['rev-Row--collapse'],
  smallCollapse: ['rev-Row--smallCollapse'],
  mediumCollapse: ['rev-Row--mediumCollapse'],
  largeCollapse: ['rev-Row--largeCollapse'],
  xlargeCollapse: ['rev-Row--xlargeCollapse'],
  xxlargeCollapse: ['rev-Row--xxlargeCollapse'],

  uncollapse: ['rev-Row--uncollapse'],
  smallUncollapse: ['rev-Row--smallUncollapse'],
  mediumUncollapse: ['rev-Row--mediumUncollapse'],
  largeUncollapse: ['rev-Row--largeUncollapse'],
  xlargeUncollapse: ['rev-Row--xlargeUncollapse'],
  xxlargeUncollapse: ['rev-Row--xxlargeUncollapse'],

  flex: ['rev-Row--flex'],
  smallFlex: ['rev-Row--smallFlex'],
  mediumFlex: ['rev-Row--mediumFlex'],
  largeFlex: ['rev-Row--largeFlex'],
  xlargeFlex: ['rev-Row--xlargeFlex'],
  xxlargeFlex: ['rev-Row--xxlargeFlex'],

  unflex: ['rev-Row--unflex'],
  smallUnflex: ['rev-Row--smallUnflex'],
  mediumUnflex: ['rev-Row--mediumUnflex'],
  largeUnflex: ['rev-Row--largeUnflex'],
  xlargeUnflex: ['rev-Row--xlargeUnflex'],
  xxlargeUnflex: ['rev-Row--xxlargeUnflex'],

  smallUnstack: ['rev-Row--smallUnstack'],
  mediumUnstack: ['rev-Row--mediumUnstack'],
  largeUnstack: ['rev-Row--largeUnstack'],
  xlargeUnstack: ['rev-Row--xlargeUnstack'],
  xxlargeUnstack: ['rev-Row--xxlargeUnstack'],

  right: ['rev-Row--right'],
  center: ['rev-Row--center'],
  justify: ['rev-Row--justify'],
  spaced: ['rev-Row--spaced'],
  top: ['rev-Row--top'],
  middle: ['rev-Row--middle'],
  bottom: ['rev-Row--bottom'],
  stretch: ['rev-Row--stretch']
}, 'flex', ['rev-Row--flex']);

var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var NUMBER_PROPS_TO_CLASS_NAMES = {
  smallUp: function smallUp(x) {
    return ['rev-Row--smallUp' + x];
  },
  mediumUp: function mediumUp(x) {
    return ['rev-Row--mediumUp' + x];
  },
  largeUp: function largeUp(x) {
    return ['rev-Row--largeUp' + x];
  },
  xlargeUp: function xlargeUp(x) {
    return ['rev-Row--xlargeUp' + x];
  },
  xxlargeUp: function xxlargeUp(x) {
    return ['rev-Row--xxlargeUp' + x];
  }
};

var NUMBER_PROPS = Object.keys(NUMBER_PROPS_TO_CLASS_NAMES);

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'className']);

      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var numberClassNames = [];
      NUMBER_PROPS.forEach(function (name) {
        var value = props[name];
        var fn = NUMBER_PROPS_TO_CLASS_NAMES[name];
        if (value != null) {
          numberClassNames.push(fn(value));
        }
        delete props[name];
      });

      var divClassName = (0, _classnames2.default)(className, 'rev-Row', boolClassNames, numberClassNames);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;
//# sourceMappingURL=Row.js.map