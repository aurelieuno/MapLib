'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expander = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  left: 'rev-Drawer--left',
  right: 'rev-Drawer--right',
  top: 'rev-Drawer--top',
  scroll: 'rev-Drawer--scroll',
  fixed: 'rev-Drawer--fixed',
  overlay: 'rev-Drawer--overlay',
  collapsible: 'rev-Drawer--collapsible'
};

var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var StatelessDrawer = function (_React$Component) {
  _inherits(StatelessDrawer, _React$Component);

  function StatelessDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatelessDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatelessDrawer.__proto__ || Object.getPrototypeOf(StatelessDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.expand = function () {
      if (_this.props.expand) {
        _this.props.expand();
      }
    }, _this.close = function () {
      if (_this.props.close) {
        _this.props.close();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatelessDrawer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propClassNames = BOOL_PROPS.reduce(function (acc, key) {
        var value = BOOL_PROPS_TO_CLASS_NAMES[key];
        acc[value] = _this2.props[key];
        return acc;
      }, {});
      var newClassName = (0, _classnames2.default)(this.props.className, propClassNames);

      return _react2.default.createElement(
        Expander,
        {
          open: this.props.open,
          className: newClassName,
          closer: _react2.default.createElement(
            'a',
            { className: 'rev-Drawer-closer', onClick: this.close },
            this.props.closerChildren
          )
        },
        _react2.default.createElement(this.props.expanderComponentClass, {
          className: 'rev-Drawer-expander',
          onClick: this.expand
        }, this.props.expanderChildren),
        this.props.children
      );
    }
  }]);

  return StatelessDrawer;
}(_react2.default.Component);

StatelessDrawer.propTypes = {
  open: _propTypes2.default.bool,
  close: _propTypes2.default.func,
  expand: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closerChildren: _propTypes2.default.node,
  expanderChildren: _propTypes2.default.node,
  expanderComponentClass: _propTypes2.default.string
};
StatelessDrawer.defaultProps = {
  expanderComponentClass: 'a',
  expanderClassName: '',
  expanderChildren: 'Expand this',
  closerChildren: 'Close This',
  open: 'false'
};
exports.default = StatelessDrawer;
var Expander = exports.Expander = function Expander(props) {
  return _react2.default.createElement(
    'div',
    { className: 'rev-Drawer ' + (props.open ? 'rev-Drawer--open' : '') + ' ' + props.className },
    props.closer,
    _react2.default.createElement(
      'div',
      { className: 'rev-Drawer-contents' },
      props.children
    )
  );
};

Expander.defaultProps = {
  className: ''
};

Expander.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closer: _propTypes2.default.node,
  open: _propTypes2.default.bool
};
//# sourceMappingURL=StatelessDrawer.js.map