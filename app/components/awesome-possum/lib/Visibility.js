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
  showForSmall: 'Show--smallUp',
  showForMedium: 'Show--mediumUp',
  showForLarge: 'Show--largeUp',
  showForXlarge: 'Show--xlargeUp',
  showForXxlarge: 'Show--xxlargeUp',

  showForSmallOnly: 'Show--smallOnly',
  showForMediumOnly: 'Show--mediumOnly',
  showForLargeOnly: 'Show--largeOnly',
  showForXlargeOnly: 'Show--xlargeOnly',
  showForXxlargeOnly: 'Show--xxlargeOnly',

  hideForSmall: 'Hide',
  hideForMedium: 'Hide--mediumUp',
  hideForLarge: 'Hide--largeUp',
  hideForXlarge: 'Hide--xlargeUp',
  hideForXxlarge: 'Hide--xxlargeUp',

  hideForSmallOnly: 'Hide--smallOnly',
  hideForMediumOnly: 'Hide--mediumOnly',
  hideForLargeOnly: 'Hide--largeOnly',
  hideForXlargeOnly: 'Hide--xlargeOnly',
  hideForXxlargeOnly: 'Hide--xxlargeUp',

  hiddenForSmall: 'Hidden',
  hiddenForMedium: 'Hidden--mediumUp',
  hiddenForLarge: 'Hidden--largeUp',
  hiddenForXlarge: 'Hidden--xlargeUp',
  hiddenForXxlarge: 'Hidden--xxlargeUp',

  hiddenForSmallOnly: 'Hidden--smallOnly',
  hiddenForMediumOnly: 'Hidden--mediumOnly',
  hiddenForLargeOnly: 'Hidden--largeOnly',
  hiddenForXlargeOnly: 'Hidden--xlargeOnly',
  hiddenForXxlargeOnly: 'Hidden--xxlargeUp'
};

var PROP_TYPES = {
  children: _propTypes2.default.node
};
Object.keys(CLASS_NAMES).forEach(function (key) {
  return PROP_TYPES[key] = _propTypes2.default.bool;
});

var Visibility = function (_Component) {
  _inherits(Visibility, _Component);

  function Visibility() {
    _classCallCheck(this, Visibility);

    return _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));
  }

  _createClass(Visibility, [{
    key: 'render',
    value: function render() {
      var classNamesList = [this.props.className];
      Object.keys(this.props).forEach(function (propName) {
        var className = CLASS_NAMES[propName];
        if (className) {
          classNamesList.push(className);
        }
      });

      var newClassName = (0, _classnames2.default)(classNamesList);
      if (_react2.default.isValidElement(this.props.children)) {
        return (0, _react.cloneElement)(this.props.children, { className: newClassName });
      }

      return _react2.default.createElement(
        'span',
        { className: newClassName },
        this.props.children
      );
    }
  }]);

  return Visibility;
}(_react.Component);

Visibility.propTypes = PROP_TYPES;
exports.default = Visibility;
//# sourceMappingURL=Visibility.js.map